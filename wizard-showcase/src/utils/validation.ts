import { Question, QuestionType } from "../configTypes";
import { useLanguage } from "../i18n";

/**
 * Custom hook to validate a question's answer using the current language.
 * 
 * CHANGES:
 * - Added validation for QuestionType.Email (allow plus sign).
 * - Added validation for QuestionType.Phone (check length > 6).
 */
export function useValidateAnswer(): (question: Question, value: any) => string {
  const { translate } = useLanguage();

  return (question: Question, value: any): string => {
    // If the field is required, ensure that a value is provided.
    if (question.required && (!value || value.length === 0 || (typeof value === 'string' && value.trim() === ''))) {
      return translate('fieldRequired');
    }

    // Additional default validations per question type.
    if (question.type === QuestionType.Email && value) {
      // We'll allow plus sign usage in the local-part: "name+tag@domain.com"
      // Basic pattern allowing plus and typical email characters. 
      // Note: this is simpler than full RFC 5322 but sufficient for typical usage.
      const emailRegex = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
      if (!emailRegex.test(value)) {
        return translate('invalidEmail');
      }
    }

    if (question.type === QuestionType.Phone && value) {
      // Check if length > 6 and numeric (with optional leading +)
      // Example: +1234567 or 1234567 => min 7 digits. 
      // We'll do a quick check:
      const phoneRegex = /^\+?\d{7,}$/; 
      if (!phoneRegex.test(value)) {
        return "Invalid phone number (must be at least 7 digits, optionally starting with +).";
      }
    }

    // Custom validation rules from question.validation object
    if (question.validation) {
      if (question.validation.type === 'email') {
        // Simple check if it's an email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          return translate('invalidEmail');
        }
      }
      // Additional validations can be added here.
    }

    return '';
  };
}
