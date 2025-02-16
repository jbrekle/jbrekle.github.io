import React, { useState } from 'react';
import Step from './Step';
import { validateAnswer } from '../utils/validation';
import { useLanguage } from '../i18n';
import { localize } from '../utils/localize';

function Wizard({ config }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const { language } = useLanguage();

  const pages = config.pages;

  // Callback to store answers by question id.
  function handleAnswerChange(questionId, value) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  // Validate the current page – loop through all sections and questions.
  let pageHasErrors = false;
  pages[currentPage].sections.forEach((section) => {
    section.questions.forEach((question) => {
      const error = validateAnswer(question, answers[question.id], language);
      if (error) {
        pageHasErrors = true;
      }
    });
  });

  function handleNext() {
    if (!pageHasErrors && currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleBack() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleSubmit() {
    // For demo, if config.demo true, log the results to the console.
    if (config.demo) {
      console.log('Submitted Answers:', answers);
      setCurrentPage(pages.length); // Show thank-you page.
    } else {
      // Post to a REST API endpoint.
      fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      }).then((response) => {
        if (response.ok) {
          setCurrentPage(pages.length);
        } else {
          alert('Submission failed');
        }
      });
    }
  }

  // Render thank-you page after final submission.
  if (currentPage === pages.length) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'de' ? 'Danke!' : 'Thank You!'}
        </h2>
        <p>
          {language === 'de'
            ? 'Ihre Antworten wurden übermittelt.'
            : 'Your responses have been submitted.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-xl font-semibold mb-4">
        {localize(pages[currentPage].title, language)}
      </h2>
      <Step
        page={pages[currentPage]}
        answers={answers}
        onAnswerChange={handleAnswerChange}
      />
      <div className="flex justify-between mt-6">
        {/* Hide back button on first page */}
        {currentPage > 0 ? (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            {language === 'de' ? 'Zurück' : 'Back'}
          </button>
        ) : (
          <div></div>
        )}
        {currentPage < pages.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={pageHasErrors}
            className={`px-4 py-2 rounded ${
              pageHasErrors
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-blue-500 text-white'
            }`}
          >
            {language === 'de' ? 'Weiter' : 'Next'}
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={pageHasErrors}
            className={`px-4 py-2 rounded ${
              pageHasErrors
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-green-500 text-white'
            }`}
          >
            {language === 'de' ? 'Abschicken' : 'Submit'}
          </button>
        )}
      </div>
    </div>
  );
}

export default Wizard;
