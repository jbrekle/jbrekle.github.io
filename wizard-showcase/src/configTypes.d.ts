/**
 * @typedef {('equal'|'notequal'|'greater'|'less'|'greaterOrEqual'|'smallerOrEqual'|'contains'|'notContains')} Comparer
 */

/**
 * @typedef {Object} AbortCondition
 * @property {Comparer} comparer - The comparer to use.
 * @property {any} value - The value to compare against.
 * @property {string} abortExplaination - Markdown text to display when the condition is met.
 */

/**
 * @typedef {Object} Option
 * @property {string} id - Unique identifier for the option (used in bigTileChoice).
 * @property {string} label - The label for the option.
 * @property {string} [explaination] - Markdown text explanation for the option (for bigTileChoice).
 * @property {string} [image] - URL of an optional image.
 */

/**
 * @typedef {Object} Question
 * @property {string} id - Unique question identifier.
 * @property {('text'|'multiline'|'radio'|'checkbox'|'date'|'rtf'|'slider'|'file'|'bigTileChoice'|'explaination')} type - The type of the question.
 * @property {Object.<string, string>} label - Multilanguage text for the question label (or explanation for type 'explaination').
 * @property {Object.<string, string>} [tooltip] - Multilanguage tooltip text.
 * @property {Object.<string, string>} [info] - Multilanguage informational text.
 * @property {boolean} required - Whether the field is required.
 * @property {Object} [validation] - Validation configuration (e.g. { type: "email" }).
 * @property {string} [keyboard] - Input mode for mobile keyboards.
 * @property {Array.<string>|Array.<Option>} [options] - Options for radio, checkbox, or bigTileChoice types.
 * @property {number} [min] - Minimum value (for slider).
 * @property {number} [max] - Maximum value (for slider).
 * @property {AbortCondition} [abortCondition] - Condition that, if met, aborts the wizard.
 * @property {boolean} [noBubble] - For 'explaination' type, disable the default blue info bubble.
 */

/**
 * @typedef {Object} Section
 * @property {Object.<string, string>} heading - Multilanguage heading text.
 * @property {boolean} [collapsible] - Whether the section is collapsible.
 * @property {boolean} [accordion] - Whether the section is rendered as an accordion.
 * @property {Question[]} questions - Array of questions in the section.
 */

/**
 * @typedef {Object} Page
 * @property {Object.<string, string>} title - Multilanguage title for the page.
 * @property {Section[]} sections - Array of sections in the page.
 */

/**
 * @typedef {Object} Config
 * @property {Object.<string, string>} title - Multilanguage title for the wizard.
 * @property {Object} theme - Theme configuration.
 * @property {boolean} demo - If true, submission is logged to the console.
 * @property {Page[]} pages - Array of wizard pages.
 * @property {Object.<string, string>} consultationMessage - Multilanguage consultation message shown on abort.
 * @property {Object.<string, string>} consulationButtonLabel - Multilanguage label for the "contact us" button.
 * @property {Question[]} [contactQuestions] - Array of questions for the contact page.
 */
  
