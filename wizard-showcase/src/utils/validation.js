import { globalMessages } from '../globalMessages';

/**
 * Validate the answer for a given question.
 * @param {import("../configTypes").Question} question 
 * @param {any} value 
 * @param {string} language 
 * @returns {string} An error message if invalid, otherwise an empty string.
 */
export function validateAnswer(question, value, language) {
  // If the field is required, ensure that a value is provided.
  if (question.required) {
    if (question.type === 'checkbox') {
      if (!value || value.length === 0) {
        return globalMessages.fieldRequired[language] || globalMessages.fieldRequired.en;
      }
    } else {
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        return globalMessages.fieldRequired[language] || globalMessages.fieldRequired.en;
      }
    }
  }

  // Custom validation rules.
  if (question.validation) {
    if (question.validation.type === 'email') {
      // Simple email regex for validation.
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        return globalMessages.invalidEmail[language] || globalMessages.invalidEmail.en;
      }
    }
    // Additional validations can be added here.
  }

  return '';
}
  
