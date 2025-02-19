import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Step from './Step';
import Question from './Question';
import { useLanguage } from '../i18n';
import { localize } from '../utils/localize';
import { checkAbortConditions, runPageValidation } from '../helpers/wizardHelpers';
import { useValidateAnswer } from '../utils/validation';
import { Config, QuestionType } from '../configTypes';

/**
 * CHANGES:
 * - Reworked logic to show a "contact page" after the last wizard page, if contactQuestions exist,
 *   and also if an abort condition is triggered.
 * - "specialPage" usage simplified so that abort sets currentPage to the contact page, 
 *   but we also show the contact page normally after the last wizard page. 
 * - No separate 'specialPage' state; we treat contactPage as just another step (pages.length).
 * - The success/thank-you page is at index pages.length + 1.
 */

const Wizard: React.FC<{ config: Config }> = ({ config }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [contactAnswers, setContactAnswers] = useState<{ [key: string]: any }>({}); 
  const { language, translate } = useLanguage();
  const validate = useValidateAnswer();

  const pages = config.pages || [];
  const hasContactPage = config.contactQuestions && config.contactQuestions.length > 0;

  // The final wizard page index is pages.length - 1.
  // The contact page (if any) is next (index = pages.length).
  // The success/thank-you page is after that (index = pages.length + 1).
  const finalWizardPageIndex = pages.length - 1;
  const contactPageIndex = pages.length; 
  const successPageIndex = pages.length + (hasContactPage ? 2 : 1);

  // Utility to see if the current page is a normal wizard page:
  const isWizardPage = currentPage <= finalWizardPageIndex;
  const isContactPage = hasContactPage && currentPage === contactPageIndex;
  const isSuccessPage = currentPage === successPageIndex;

  /**
   * Handle normal question answer changes for wizard pages.
   */
  function handleAnswerChange(questionId: string, value: any) {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  }

  /**
   * Mark a question as touched (for validation).
   */
  function markTouched(questionId: string) {
    setTouched(prev => ({ ...prev, [questionId]: true }));
  }

  /**
   * Validate the current wizard page and move to the next step, 
   * or trigger the contact page if an abort condition is met.
   */
  function handleNext() {
    // Check if any abort condition is met on the current wizard page.
    if (isWizardPage) {
      const abortExplaination = checkAbortConditions(pages, currentPage, answers);
      if (abortExplaination) {
        // We skip the next wizard pages, show an explanation, then contact form:
        // Store the explanation in "contactAnswers" or show it on contact page. 
        // We'll store it under a pseudo key "abortExplaination".
        setContactAnswers(prev => ({ ...prev, abortExplaination }));
        // Go to contact page (if it exists), otherwise success page.
        if (hasContactPage) {
          setCurrentPage(contactPageIndex);
          return;
        } else {
          // If there's no contact page, just go to the success page with the explanation:
          setCurrentPage(successPageIndex);
          return;
        }
      }
    }

    // If we're within wizard pages, do validation:
    if (isWizardPage) {
      const pageHasErrors = runPageValidation(pages, currentPage, touched, answers, validate);
      if (pageHasErrors) {
        // Prevent moving forward if there are errors
        return;
      }
    }

    // Move to next page or contact or success:
    setCurrentPage(currentPage + 1);
  }

  /**
   * Go back one step, unless we're on the first page, then do nothing.
   */
  function handleBack() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  /**
   * Submit wizard results if not in demo mode, or simply proceed to success page.
   * We skip any final validation here because handleNext does it on the last wizard page.
   * Then we either go to the contact page if it hasn't been shown, or to success if contact is done.
   */
  function handleSubmitWizard() {
    // If we have a contact page and haven't shown it yet, jump there:
    if (hasContactPage && currentPage <= finalWizardPageIndex) {
      setCurrentPage(contactPageIndex);
      return;
    }
    // If we've done wizard pages and there's no contact page, or it's finished,
    // proceed to success or do a server submit:
    if (!config.demo) {
      // Production: send answers to the server
      fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      }).then(response => {
        if (response.ok) {
          setCurrentPage(successPageIndex);
        } else {
          alert('Submission failed');
        }
      });
    } else {
      // Demo mode: just log to console
      console.log('Submitted Answers (demo mode):', answers);
      setCurrentPage(successPageIndex);
    }
  }

  /**
   * Handle contact question changes.
   */
  function handleContactAnswerChange(questionId: string, value: any) {
    setContactAnswers(prev => ({ ...prev, [questionId]: value }));
  }

  /**
   * Final submission after the contact page is completed. 
   * Then go to success page, or post data to server if needed.
   */
  function handleContactSubmit() {
    // Validate contact fields:
    let hasErrors = false;
    if (config.contactQuestions) {
      for (const cq of config.contactQuestions) {
        // We call the same validation function:
        const err = validate(cq, contactAnswers[cq.id]);
        if (err) {
          hasErrors = true;
          // We don't have a "touched" concept for contact questions, 
          // so in a real scenario you'd store them similarly. For now, we'll just alert.
          alert(`${cq.id}: ${err}`);
          // Stop at the first error.
          return;
        }
      }
    }

    if (!hasErrors) {
      // Merge contactAnswers into main answers if needed:
      // Or keep them separate. Here we just log them or send them to server:
      if (!config.demo) {
        // Production: send both wizard + contact data to server in one call
        const combined = { wizardAnswers: answers, contactAnswers };
        fetch('/api/submit-contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(combined),
        }).then(response => {
          if (response.ok) {
            setCurrentPage(successPageIndex);
          } else {
            alert('Submission failed');
          }
        });
      } else {
        // Demo mode: just log to console
        console.log('Submitted Contact Answers (demo mode):', contactAnswers);
        setCurrentPage(successPageIndex);
      }
    }
  }

  // RENDER LOGIC

  // If we're beyond the success page index, do nothing special (should not happen).
  if (currentPage > successPageIndex) {
    return (
      <div className="text-center p-4 custom-thankyou-page">
        <h2 className="text-2xl font-bold mb-4">{translate('thankYou')}</h2>
        <p>{translate('submissionSuccess')}</p>
      </div>
    );
  }

  // If we're at the success page index, show the final page
  if (isSuccessPage) {
    return (
      <div className="text-center p-4 custom-thankyou-page">
        <h2 className="text-2xl font-bold mb-4">{translate('thankYou')}</h2>
        <p>{translate('submissionSuccess')}</p>
      </div>
    );
  }

  // If we're on the contact page
  if (isContactPage) {
    // If there's an abortExplaination, we can show it:
    const abortExplaination = contactAnswers.abortExplaination || "";
    return (
      <div className="bg-white shadow rounded p-4 custom-contact-page">
        {abortExplaination && (
          <div className="mb-4 border border-red-300 bg-red-50 p-2 rounded">
            <ReactMarkdown>{abortExplaination}</ReactMarkdown>
          </div>
        )}

        <h2 className="text-xl font-semibold mb-4">
          {translate('contactInformation')}
        </h2>
        
        {config.consultationMessage && !abortExplaination && (
          <p className="mb-4">{localize(config.consultationMessage, language)}</p>
        )}

        {config.contactQuestions && config.contactQuestions.map((question) => {
          const errorMsg = validate(question, contactAnswers[question.id]);
          return (
            <div key={question.id} className="mb-4">
              <Question
                question={question}
                value={contactAnswers[question.id]}
                onChange={handleContactAnswerChange}
                markTouched={() => { /* We can implement if we want to track touched. */ }}
                error={errorMsg}
              />
            </div>
          );
        })}
        
        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-colors custom-back-btn"
          >
            {translate('back')}
          </button>
          <button
            onClick={handleContactSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors custom-submit-btn"
          >
            {translate('submit')}
          </button>
        </div>
      </div>
    );
  }

  // Otherwise, it's a normal wizard page (currentPage <= finalWizardPageIndex).
  const page = pages[currentPage];
  return (
    <div className="bg-white shadow rounded p-4 custom-wizard-container" key={language}>
      <h2 className="text-xl font-semibold mb-4">
        {localize(page.title, language)}
      </h2>
      <Step
        page={page}
        answers={answers}
        onAnswerChange={handleAnswerChange}
        touched={touched}
        markTouched={markTouched}
      />
      <div className="flex justify-between mt-6">
        {currentPage > 0 ? (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-colors custom-back-btn"
          >
            {translate('back')}
          </button>
        ) : (
          <div></div>
        )}

        {/* If not on the final wizard page, go to next. Otherwise, submit. */}
        {currentPage < finalWizardPageIndex ? (
          <button
            onClick={handleNext}
            disabled={runPageValidation(pages, currentPage, touched, answers, validate)}
            className={`px-4 py-2 rounded custom-next-btn ${
              runPageValidation(pages, currentPage, touched, answers, validate) 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600 transition-colors'
            }`}
          >
            {translate('next')}
          </button>
        ) : (
          <button
            onClick={handleSubmitWizard}
            disabled={runPageValidation(pages, currentPage, touched, answers, validate)}
            className={`px-4 py-2 rounded custom-submit-btn ${
              runPageValidation(pages, currentPage, touched, answers, validate)
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600 transition-colors'
            }`}
          >
            {translate('submit')}
          </button>
        )}
      </div>
    </div>
  );
};

export default Wizard;
