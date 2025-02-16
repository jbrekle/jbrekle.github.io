export function localize(textObj, language) {
  // If the text is a simple string, return it.
  if (typeof textObj === 'string') return textObj;
  // Otherwise, return the text for the current language,
  // fallback to English or the first available value.
  return textObj[language] || textObj['en'] || Object.values(textObj)[0] || '';
}
