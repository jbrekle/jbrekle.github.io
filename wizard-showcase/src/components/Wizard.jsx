import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Step from './Step';
import Question from './Question';
import { validateAnswer } from '../utils/validation';
import { useLanguage } from '../i18n';
import { localize } from '../utils/localize';

function Wizard({ config }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [touched, setTouched] = useState({});
  // specialPage is used when an abort condition is met or when showing the contact page.
  // It can be null, or an object with type 'abort' or 'contact'.
  const [specialPage, setSpecialPage] = useState(null);
  // Contact answers from the contact page.
  const [contactAnswers, setContactAnswers] = useState({});
  const { language, t } = useLanguage();

  const pages = config.pages;

  // Callback to store answers for main wizard questions.
  function handleAnswerChange(questionId, value) {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  }

  // Mark a field as touched so that validation errors appear only after interaction.
  function markTouched(questionId) {
    setTouched(prev => ({ ...prev, [questionId]: true }));
  }

  // Helper function that checks if an answer satisfies the abort condition.
  function satisfiesCondition(answer, comparer, conditionValue) {
    switch (comparer) {
      case 'equal':
        return answer === conditionValue;
      case 'notequal':
        return answer !== conditionValue;
      case 'greater':
        return Number(answer) > Number(conditionValue);
      case 'less':
        return Number(answer) < Number(conditionValue);
      case 'greaterOrEqual':
        return Number(answer) >= Number(conditionValue);
      case 'smallerOrEqual':
        return Number(answer) <= Number(conditionValue);
      case 'contains':
        return Array.isArray(answer)
          ? answer.includes(conditionValue)
          : (typeof answer === 'string' && answer.includes(conditionValue));
      case 'notContains':
        return Array.isArray(answer)
          ? !answer.includes(conditionValue)
          : (typeof answer === 'string' && !answer.includes(conditionValue));
      default:
        return false;
    }
  }

  // Checks all questions on the current page for an abort condition.
  function checkAbortConditions() {
    if (currentPage < pages.length) {
      for (const section of pages[currentPage].sections) {
        if (section.questions) {
          for (const question of section.questions) {
            if (question.abortCondition) {
              const { comparer, value: condValue, abortExplaination } = question.abortCondition;
              const answer = answers[question.id];
              if (satisfiesCondition(answer, comparer, condValue)) {
                return abortExplaination;
              }
            }
          }
        }
      }
    }
    return null;
  }

  // Run validation on the current page (only for fields that have been touched).
  let pageHasErrors = false;
  if (currentPage < pages.length) {
    pages[currentPage].sections.forEach(section => {
      if (section.questions) {
        section.questions.forEach(question => {
          if (touched[question.id]) {
            const error = validateAnswer(question, answers[question.id], language);
            if (error) {
              pageHasErrors = true;
            }
          }
        });
      }
    });
  }

  // Called when the user clicks "Next" on a wizard page.
  function handleNext() {
    const abortExplaination = checkAbortConditions();
    if (abortExplaination) {
      setSpecialPage({ type: 'abort', explanation: abortExplaination });
      return;
    }
    if (currentPage < pages.length - 1 && !pageHasErrors) {
      setCurrentPage(currentPage + 1);
    }
  }

  // Back button handler.
  function handleBack() {
    if (specialPage) {
      // If in a special (abort/contact) page, return to the previous wizard page.
      setSpecialPage(null);
    } else if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  // Submit handler for the final wizard page.
  function handleSubmit() {
    if (config.demo) {
      console.log('Submitted Answers:', answers);
      // Directly set thank-you page (no validation run)
      setCurrentPage(pages.length);
    } else {
      fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      }).then(response => {
        if (response.ok) {
          setCurrentPage(pages.length);
        } else {
          alert('Submission failed');
        }
      });
    }
  }

  // Contact page answer handler.
  function handleContactAnswerChange(questionId, value) {
    setContactAnswers(prev => ({ ...prev, [questionId]: value }));
  }

  // Submit the contact page.
  function handleContactSubmit() {
    let contactHasErrors = false;
    if (config.contactQuestions) {
      config.contactQuestions.forEach(question => {
        const error = validateAnswer(question, contactAnswers[question.id], language);
        if (error) {
          contactHasErrors = true;
        }
      });
    }
    if (!contactHasErrors) {
      console.log('Submitted Contact Answers:', contactAnswers);
      // When contact is successfully submitted, go directly to thank-you page.
      setCurrentPage(pages.length);
      setSpecialPage(null);
    }
  }

  // If currentPage equals pages.length, render thank-you page (no validation needed).
  if (currentPage === pages.length) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold mb-4">
          {t('thankYou')}
        </h2>
        <p>{t('submissionSuccess')}</p>
      </div>
    );
  }

  // Render the special pages (abort and contact) if active.
  if (specialPage) {
    if (specialPage.type === 'abort') {
      return (
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-4">
            {t('abortConditionMet')}
          </h2>
          <div className="mb-4">
            <ReactMarkdown components={{ p: ({ node, ...props }) => <>{props.children}</>, }}>
              {specialPage.explanation}
            </ReactMarkdown>
          </div>
          <div className="mb-4">
            <p>{localize(config.consultationMessage, language)}</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setSpecialPage({ type: 'contact' })}
              className="px-6 py-3 bg-blue-500 text-white rounded"
            >
              {localize(config.consulationButtonLabel, language)}
            </button>
          </div>
          <div className="mt-4">
            <button onClick={handleBack} className="px-4 py-2 bg-gray-300 rounded">
              {t('back')}
            </button>
          </div>
        </div>
      );
    }
    if (specialPage.type === 'contact') {
      return (
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-4">
            {t('contactInformation')}
          </h2>
          {config.contactQuestions && config.contactQuestions.map(question => (
            <div key={question.id} className="mb-4">
              <Question
                question={question}
                value={contactAnswers[question.id]}
                onChange={handleContactAnswerChange}
                markTouched={() => {}}
                error={validateAnswer(question, contactAnswers[question.id], language)}
              />
            </div>
          ))}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setSpecialPage({ type: 'abort', explanation: specialPage.explanation || '' })}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              {t('back')}
            </button>
            <button
              onClick={handleContactSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              {t('submit')}
            </button>
          </div>
        </div>
      );
    }
  }

  // Render the normal wizard page.
  return (
    <div className="bg-white shadow rounded p-6" key={language}>
      <h2 className="text-xl font-semibold mb-4">
        {localize(pages[currentPage].title, language)}
      </h2>
      <Step
        page={pages[currentPage]}
        answers={answers}
        onAnswerChange={handleAnswerChange}
        touched={touched}
        markTouched={markTouched}
      />
      <div className="flex justify-between mt-6">
        {currentPage > 0 ? (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            {t('back')}
          </button>
        ) : (
          <div></div>
        )}
        {currentPage < pages.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={pageHasErrors}
            className={`px-4 py-2 rounded ${pageHasErrors ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          >
            {t('next')}
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={pageHasErrors}
            className={`px-4 py-2 rounded ${pageHasErrors ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-500 text-white'}`}
          >
            {t('submit')}
          </button>
        )}
      </div>
    </div>
  );
}

export default Wizard;
