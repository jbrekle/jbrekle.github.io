import React from 'react';
import Question from './Question';
import CollapsibleSection from './CollapsibleSection';
import Accordion from './Accordion';
import { useLanguage } from '../i18n';
import { validateAnswer } from '../utils/validation';
import { localize } from '../utils/localize';

function Step({ page, answers, onAnswerChange }) {
  const { language } = useLanguage();

  return (
    <div>
      {page.sections.map((section, index) => {
        const content = (
          <div className="mb-4">
            {section.heading && (
              <h3 className="text-lg font-bold mb-2">
                {localize(section.heading, language)}
              </h3>
            )}
            {section.questions &&
              section.questions.map((question) => {
                const error = validateAnswer(
                  question,
                  answers[question.id],
                  language
                );
                return (
                  <Question
                    key={question.id}
                    question={question}
                    value={answers[question.id]}
                    onChange={onAnswerChange}
                    error={error}
                  />
                );
              })}
          </div>
        );

        // Wrap the section in a collapsible or accordion component if specified.
        if (section.collapsible) {
          return (
            <CollapsibleSection key={index} title={localize(section.heading, language)} defaultOpen>
              {content}
            </CollapsibleSection>
          );
        }
        if (section.accordion) {
          return (
            <Accordion key={index} title={localize(section.heading, language)}>
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
