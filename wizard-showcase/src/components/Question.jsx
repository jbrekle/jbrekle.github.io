import React from 'react';
import TextInput from './inputs/TextInput';
import RadioInput from './inputs/RadioInput';
import CheckboxInput from './inputs/CheckboxInput';
import DatePicker from './inputs/DatePicker';
import RichTextEditor from './inputs/RichTextEditor';
import SliderInput from './inputs/SliderInput';
import FileUpload from './inputs/FileUpload';
import MultilineTextInput from './inputs/MultilineTextInput';
import BigTileChoice from './inputs/BigTileChoice';
import Explanation from './inputs/Explanation';
import Tooltip from './Tooltip';
import InfoBox from './InfoBox';
import { localize } from '../utils/localize';
import { useLanguage } from '../i18n';

// NEW IMPORTS FOR EMAIL AND PHONE
import EmailInput from './inputs/EmailInput';
import PhoneInputField from './inputs/PhoneInput';

/**
 * Renders a single question based on its QuestionType.
 * 
 * CHANGES:
 * - Added new cases for "email" and "phone" question types.
 */
function Question({ question, value, onChange, error, markTouched }) {
  const { language } = useLanguage();

  // onBlur handler to mark the field as touched.
  const handleBlur = () => {
    if (markTouched) {
      markTouched(question.id);
    }
  };

  // Wrapper for onChange: pass the value along with the question id.
  const handleChange = (val) => {
    onChange(question.id, val);
  };

  let inputElement;
  switch (question.type) {
    case 'text':
      inputElement = (
        <TextInput
          value={value || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          keyboard={question.keyboard}
        />
      );
      break;
    case 'multiline':
      inputElement = (
        <MultilineTextInput
          value={value || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          keyboard={question.keyboard}
        />
      );
      break;
    case 'radio':
      inputElement = (
        <RadioInput
          options={question.options}
          value={value}
          onChange={handleChange}
        />
      );
      break;
    case 'checkbox':
      inputElement = (
        <CheckboxInput
          options={question.options}
          value={value || []}
          onChange={handleChange}
        />
      );
      break;
    case 'date':
      inputElement = (
        <DatePicker
          value={value || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          limit={question.limit}
        />
      );
      break;
    case 'rtf':
      inputElement = (
        <RichTextEditor value={value || ''} onChange={handleChange} />
      );
      break;
    case 'slider':
      inputElement = (
        <SliderInput
          value={value || question.min}
          min={question.min}
          max={question.max}
          onChange={handleChange}
        />
      );
      break;
    case 'file':
      inputElement = <FileUpload onChange={handleChange} />;
      break;
    case 'bigTileChoice':
      inputElement = (
        <BigTileChoice
          options={question.options}
          value={value}
          onChange={handleChange}
        />
      );
      break;
    case 'explaination':
      // For an explaination type, simply render the explanation text as markdown.
      inputElement = (
        <Explanation text={localize(question.label, language)} noBubble={question.noBubble} />
      );
      break;
    // NEW CASES
    case 'email':
      inputElement = (
        <EmailInput
          value={value || ''}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      );
      break;
    case 'phone':
      inputElement = (
        <PhoneInputField
          value={value || ''}
          onChange={handleChange}
        />
      );
      break;
    default:
      inputElement = <div>Unsupported question type: {question.type}</div>;
  }

  return (
    <div className="mb-4">
      {question.type !== 'explaination' && (
        <label className="block font-medium mb-1">
          {localize(question.label, language)}
          {question.tooltip && (
            <Tooltip text={localize(question.tooltip, language)} />
          )}
        </label>
      )}
      {inputElement}
      {question.info && (
        <InfoBox text={localize(question.info, language)} />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default Question;
