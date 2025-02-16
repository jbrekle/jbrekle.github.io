export function validateAnswer(question, value, language) {
  // If the field is required, ensure that a value is provided.
  if (question.required) {
    if (question.type === 'checkbox') {
      if (!value || value.length === 0) {
        return language === 'de'
          ? 'Dieses Feld ist erforderlich.'
          : 'This field is required.';
      }
    } else {
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        return language === 'de'
          ? 'Dieses Feld ist erforderlich.'
          : 'This field is required.';
      }
    }
  }

  // Custom validation rules.
  if (question.validation) {
    if (question.validation.type === 'email') {
      // Simple email regex for validation.
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        return language === 'de'
          ? 'Ungültige E-Mail-Adresse.'
          : 'Invalid email address.';
      }
    }
    // Additional validations can be added here.
  }

  return '';
}
