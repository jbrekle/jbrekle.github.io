import React, { useState } from 'react';
import Step from './Step';

function Wizard({ config }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});

  const pages = config.pages;

  // Callback to store answers by question id.
  function handleAnswerChange(questionId, value) {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  }

  function handleNext() {
    if (currentPage < pages.length - 1) {
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
      console.log("Submitted Answers:", answers);
      setCurrentPage(pages.length); // Show thank-you page.
    } else {
      // Post to a REST API endpoint.
      fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers)
      }).then(response => {
        if (response.ok) {
          setCurrentPage(pages.length);
        } else {
          alert("Submission failed");
        }
      });
    }
  }

  // Render thank-you page after final submission.
  if (currentPage === pages.length) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p>Your responses have been submitted.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-xl font-semibold mb-4">{pages[currentPage].title}</h2>
      <Step page={pages[currentPage]} answers={answers} onAnswerChange={handleAnswerChange} />
      <div className="flex justify-between mt-6">
        <button 
          onClick={handleBack} 
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Back
        </button>
        {currentPage < pages.length - 1 ? (
          <button 
            onClick={handleNext} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button 
            onClick={handleSubmit} 
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Wizard;
  
