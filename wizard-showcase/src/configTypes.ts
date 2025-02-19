/**
 * This file defines TypeScript enums and classes for the tenant configuration.
 * 
 * CHANGES:
 * - Added new QuestionType.Email and QuestionType.Phone.
 */

export enum Comparer {
  Equal = "equal",
  NotEqual = "notequal",
  Greater = "greater",
  Less = "less",
  GreaterOrEqual = "greaterOrEqual",
  SmallerOrEqual = "smallerOrEqual",
  Contains = "contains",
  NotContains = "notContains",
}

export enum QuestionType {
  Text = "text",
  Multiline = "multiline",
  Radio = "radio",
  Checkbox = "checkbox",
  Date = "date",
  RTF = "rtf",
  Slider = "slider",
  File = "file",
  BigTileChoice = "bigTileChoice",
  Explaination = "explaination",
  Email = "email",       // <--- NEW
  Phone = "phone"        // <--- NEW
}

export class AbortCondition {
  comparer: Comparer;
  value: any;
  abortExplaination: string; // Markdown text to display when condition is met.

  constructor(comparer: Comparer, value: any, abortExplaination: string) {
    this.comparer = comparer;
    this.value = value;
    this.abortExplaination = abortExplaination;
  }
}

export class Option {
  id: string;
  label: string;
  explaination?: string;
  image?: string;

  constructor(id: string, label: string, explaination?: string, image?: string) {
    this.id = id;
    this.label = label;
    this.explaination = explaination;
    this.image = image;
  }
}

export class Question {
  id: string;
  type: QuestionType;
  label: { [lang: string]: string };
  tooltip?: { [lang: string]: string };
  info?: { [lang: string]: string };
  required: boolean;
  validation?: any;
  keyboard?: string;
  options?: Array<string | Option>;
  min?: number;
  max?: number;
  abortCondition?: AbortCondition;
  noBubble?: boolean;

  constructor(
    id: string,
    type: QuestionType,
    label: { [lang: string]: string },
    required: boolean,
    tooltip?: { [lang: string]: string },
    info?: { [lang: string]: string },
    validation?: any,
    keyboard?: string,
    options?: Array<string | Option>,
    min?: number,
    max?: number,
    abortCondition?: AbortCondition,
    noBubble?: boolean
  ) {
    this.id = id;
    this.type = type;
    this.label = label;
    this.required = required;
    this.tooltip = tooltip;
    this.info = info;
    this.validation = validation;
    this.keyboard = keyboard;
    this.options = options;
    this.min = min;
    this.max = max;
    this.abortCondition = abortCondition;
    this.noBubble = noBubble;
  }
}

export class Section {
  heading: { [lang: string]: string };
  collapsible?: boolean;
  accordion?: boolean;
  questions: Question[];

  constructor(
    heading: { [lang: string]: string },
    questions: Question[],
    collapsible?: boolean,
    accordion?: boolean
  ) {
    this.heading = heading;
    this.questions = questions;
    this.collapsible = collapsible;
    this.accordion = accordion;
  }
}

export class Page {
  title: { [lang: string]: string };
  sections: Section[];

  constructor(title: { [lang: string]: string }, sections: Section[]) {
    this.title = title;
    this.sections = sections;
  }
}

export class Config {
  title: { [lang: string]: string };
  theme: any;
  demo: boolean;
  pages: Page[];
  consultationMessage: { [lang: string]: string };
  consulationButtonLabel: { [lang: string]: string };
  contactQuestions?: Question[];

  constructor(
    title: { [lang: string]: string },
    theme: any,
    demo: boolean,
    pages: Page[],
    consultationMessage: { [lang: string]: string },
    consulationButtonLabel: { [lang: string]: string },
    contactQuestions?: Question[]
  ) {
    this.title = title;
    this.theme = theme;
    this.demo = demo;
    this.pages = pages;
    this.consultationMessage = consultationMessage;
    this.consulationButtonLabel = consulationButtonLabel;
    this.contactQuestions = contactQuestions;
  }
}
