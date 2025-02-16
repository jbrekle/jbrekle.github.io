import React from 'react';
import Question from './Question';
import CollapsibleSection from './CollapsibleSection';
import Accordion from './Accordion';

function Step({ page, answers, onAnswerChange }) {
  return (
    <div>
      {page.sections.map((section, index) => {
        const content = (
          <div className="mb-4">
            {section.heading && <h3 className="text-lg font-bold mb-2">{section.heading}</h3>}
            {section.questions && section.questions.map((question) => (
              <Question
                key={question.id}
                question={question}
                value={answers[question.id]}
                onChange={onAnswerChange}
              />
            ))}
          </div>
        );

        // Wrap the section in a collapsible or accordion component if specified.
        if (section.collapsible) {
          return (
            <CollapsibleSection key={index} title={section.heading} defaultOpen>
              {content}
            </CollapsibleSection>
          );
        }
        if (section.accordion) {
          return (
            <Accordion key={index} title={section.heading}>
              {content}
            </Accordion>
          );
        }
        return <div key={index}>{content}</div>;
      })}
    </div>
  );
}

export default Step;
  
