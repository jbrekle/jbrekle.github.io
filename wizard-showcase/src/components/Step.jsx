import React from 'react';
import Question from './Question';
import CollapsibleSection from './CollapsibleSection';
import Accordion from './Accordion';
import { useLanguage } from '../i18n';
import { localize } from '../utils/localize';
import { validateAnswer } from '../utils/validation';

function Step({ page, answers, onAnswerChange, touched, markTouched }) {
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
                const error = touched[question.id]
                  ? validateAnswer(question, answers[question.id], language)
                  : '';
                return (
                  <Question
                    key={question.id}
                    question={question}
                    value={answers[question.id]}
                    onChange={onAnswerChange}
                    error={error}
                    markTouched={markTouched}
                  />
                );
              })}
          </div>
        );

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
