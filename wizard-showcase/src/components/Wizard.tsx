import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Step from './Step';
import Question from './Question';
import { useLanguage } from '../i18n';
import { localize } from '../utils/localize';
import { checkAbortConditions, runPageValidation } from '../helpers/wizardHelpers';
import { useValidateAnswer } from '../utils/validation';
import { Config, QuestionType } from '../configTypes';

const Wizard: React.FC<{ config: Config }> = ({ config }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [contactAnswers, setContactAnswers] = useState<{ [key: string]: any }>({});
  const { language, translate } = useLanguage();
  const validate = useValidateAnswer();

  const pages = config.pages;

  function handleAnswerChange(questionId: string, value: any) {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  }

  function markTouched(questionId: string) {
    setTouched(prev => ({ ...prev, [questionId]: true }));
  }

  function handleNext() {
    if (currentPage < pages.length) {
      pages[currentPage].sections.forEach(section => {
        if (section.questions) {
          section.questions.forEach(question => {
            markTouched(question.id);
          });
        }
      });
    }
    const abortExplaination = checkAbortConditions(pages, currentPage, answers);
    if (abortExplaination) {
      // For abort, jump to contact page if available or to success.
      if (config.contactQuestions && config.contactQuestions.length > 0) {
        setCurrentPage(pages.length);
      } else {
        setCurrentPage(pages.length + 1);
      }
      return;
    }
    if (currentPage < pages.length - 1 && runPageValidation(pages, currentPage, touched, answers, validate, true)) {
      return;
    }
    setCurrentPage(currentPage + 1);
  }

  function handleBack() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleSubmitWizard() {
    if (config.demo) {
      console.log('Submitted Answers:', answers);
      setCurrentPage(pages.length + 1);
    } else {
      fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      }).then(response => {
        if (response.ok) {
          setCurrentPage(pages.length + 1);
        } else {
          alert('Submission failed');
        }
      });
    }
  }

  function handleContactAnswerChange(questionId: string, value: any) {
    setContactAnswers(prev => ({ ...prev, [questionId]: value }));
  }

  function handleContactSubmit() {
    let hasErrors = false;
    if (config.contactQuestions) {
      for (const cq of config.contactQuestions) {
        const err = validate(cq, contactAnswers[cq.id]);
        if (err) {
          hasErrors = true;
          alert(`${cq.id}: ${err}`);
          return;
        }
      }
    }
    if (!hasErrors) {
      if (!config.demo) {
        const combined = { wizardAnswers: answers, contactAnswers };
        fetch('/api/submit-contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(combined),
        }).then(response => {
          if (response.ok) {
            setCurrentPage(pages.length + 1);
          } else {
            alert('Submission failed');
          }
        });
      } else {
        console.log('Submitted Contact Answers (demo mode):', contactAnswers);
        setCurrentPage(pages.length + 1);
      }
    }
  }

  const finalWizardPageIndex = pages.length - 1;
  const contactPageIndex = config.contactQuestions && config.contactQuestions.length > 0 ? pages.length : null;
  const successPageIndex = contactPageIndex !== null ? pages.length + 1 : pages.length;

  if (currentPage === successPageIndex) {
    return (
      <div className="text-center p-4 custom-thankyou-page">
        <h2 className="text-2xl font-bold mb-4">{translate('thankYou')}</h2>
        <p>{translate('submissionSuccess')}</p>
      </div>
    );
  }

  if (contactPageIndex !== null && currentPage === contactPageIndex) {
    return (
      <div className="bg-white shadow rounded p-4 custom-contact-page">
        {contactAnswers.abortExplaination && (
          <div className="mb-4 border border-red-300 bg-red-50 p-2 rounded">
            <ReactMarkdown>{contactAnswers.abortExplaination}</ReactMarkdown>
          </div>
        )}
        <h2 className="text-xl font-semibold mb-4">{translate('contactInformation')}</h2>
        {config.consultationMessage && !contactAnswers.abortExplaination && (
          <p className="mb-4">{localize(config.consultationMessage, language)}</p>
        )}
        {config.contactQuestions && config.contactQuestions.map(question => {
          const errorMsg = validate(question, contactAnswers[question.id]);
          return (
            <div key={question.id} className="mb-4">
              <Question
                question={question}
                value={contactAnswers[question.id]}
                onChange={handleContactAnswerChange}
                markTouched={() => {}}
                error={errorMsg}
              />
            </div>
          );
        })}
        <div className="flex justify-between mt-6">
          <button onClick={handleBack} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-colors custom-back-btn">
            {translate('back')}
          </button>
          <button onClick={handleContactSubmit} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors custom-submit-btn">
            {translate('submit')}
          </button>
        </div>
      </div>
    );
  }

  const page = pages[currentPage];
  return (
    <div className="bg-white shadow rounded p-4 custom-wizard-container" key={language}>
      <h2 className="text-xl font-semibold mb-4">{localize(page.title, language)}</h2>
      <Step
        page={page}
        answers={answers}
        onAnswerChange={handleAnswerChange}
        touched={touched}
        markTouched={markTouched}
      />
      <div className="flex justify-between mt-6">
        {currentPage > 0 ? (
          <button onClick={handleBack} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-colors custom-back-btn">
            {translate('back')}
          </button>
        ) : (
          <div></div>
        )}
        {currentPage < finalWizardPageIndex ? (
          <button
            onClick={handleNext}
            disabled={runPageValidation(pages, currentPage, touched, answers, validate, true)}
            className={`px-4 py-2 rounded custom-next-btn ${
              runPageValidation(pages, currentPage, touched, answers, validate, true)
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 transition-colors'
            }`}
          >
            {translate('next')}
          </button>
        ) : (
          <button
            onClick={handleSubmitWizard}
            disabled={runPageValidation(pages, currentPage, touched, answers, validate, true)}
            className={`px-4 py-2 rounded custom-submit-btn ${
              runPageValidation(pages, currentPage, touched, answers, validate, true)
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
