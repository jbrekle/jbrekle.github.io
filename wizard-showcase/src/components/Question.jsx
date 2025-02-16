import React from 'react';
import TextInput from './inputs/TextInput';
import RadioInput from './inputs/RadioInput';
import CheckboxInput from './inputs/CheckboxInput';
import DatePicker from './inputs/DatePicker';
import RichTextEditor from './inputs/RichTextEditor';
import SliderInput from './inputs/SliderInput';
import FileUpload from './inputs/FileUpload';
import Tooltip from './Tooltip';
import InfoBox from './InfoBox';
import YouTubePlayer from './YouTubePlayer';

function Question({ question, value, onChange }) {
  // Wrapper for onChange: pass the value along with the question id.
  const handleChange = (val) => {
    onChange(question.id, val);
  };

  let inputElement;
  // Render the input component based on question type.
  switch (question.type) {
    case "text":
      inputElement = <TextInput value={value || ""} onChange={handleChange} />;
      break;
    case "radio":
      inputElement = <RadioInput options={question.options} value={value} onChange={handleChange} />;
      break;
    case "checkbox":
      inputElement = <CheckboxInput options={question.options} value={value || []} onChange={handleChange} />;
      break;
    case "date":
      inputElement = <DatePicker value={value || ""} onChange={handleChange} />;
      break;
    case "rtf":
      inputElement = <RichTextEditor value={value || ""} onChange={handleChange} />;
      break;
    case "slider":
      inputElement = (
        <SliderInput
          value={value || question.min}
          min={question.min}
          max={question.max}
          onChange={handleChange}
        />
      );
      break;
    case "file":
      inputElement = <FileUpload onChange={handleChange} />;
      break;
    case "image":
      inputElement = <img src={question.src} alt={question.label} className="my-2" />;
      break;
    case "youtube":
      inputElement = <YouTubePlayer videoId={question.videoId} />;
      break;
    default:
      inputElement = <div>Unsupported question type: {question.type}</div>;
  }

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">
        {question.label}
        {question.tooltip && <Tooltip text={question.tooltip} />}
      </label>
      {inputElement}
      {question.info && <InfoBox text={question.info} />}
    </div>
  );
}

export default Question;
  
