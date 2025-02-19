import React from 'react';
import Question from './Question';
import CollapsibleSection from './CollapsibleSection';
import Accordion from './Accordion';
import { useLanguage } from '../i18n';
import { localize } from '../utils/localize';
import { useValidateAnswer } from '../utils/validation';
import { Page } from '../configTypes';

interface StepProps {
  page: Page;
  answers: { [key: string]: any };
  onAnswerChange: (questionId: string, value: any) => void;
  touched: { [key: string]: boolean };
  markTouched: (questionId: string) => void;
}

const Step: React.FC<StepProps> = ({ page, answers, onAnswerChange, touched, markTouched }) => {
  const { language } = useLanguage();
  const validate = useValidateAnswer();
  
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
                // Use the hook-based validate function.
                const error = touched[question.id] ? validate(question, answers[question.id]) : '';
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
};

export default Step;
  
