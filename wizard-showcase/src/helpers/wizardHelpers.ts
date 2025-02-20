import { Config } from "../configTypes";

export function satisfiesCondition(answer: any, comparer: string, conditionValue: any): boolean {
  switch (comparer) {
    case 'equal':
      return answer === conditionValue;
    case 'notequal':
      return answer !== conditionValue;
    case 'greater':
      return Number(answer) > Number(conditionValue);
    case 'less':
      return Number(answer) < Number(conditionValue);
    case 'greaterOrEqual':
      return Number(answer) >= Number(conditionValue);
    case 'smallerOrEqual':
      return Number(answer) <= Number(conditionValue);
    case 'contains':
      return Array.isArray(answer)
        ? answer.includes(conditionValue)
        : (typeof answer === 'string' && answer.includes(conditionValue));
    case 'notContains':
      return Array.isArray(answer)
        ? !answer.includes(conditionValue)
        : (typeof answer === 'string' && !answer.includes(conditionValue));
    default:
      return false;
  }
}

export function checkAbortConditions(
  pages: Config["pages"],
  currentPage: number,
  answers: { [key: string]: any }
): string | null {
  if (currentPage < pages.length) {
    for (const section of pages[currentPage].sections) {
      if (section.questions) {
        for (const question of section.questions) {
          if (question.abortCondition) {
            const { comparer, value: condValue, abortExplaination } = question.abortCondition;
            const answer = answers[question.id];
            if (satisfiesCondition(answer, comparer, condValue)) {
              return abortExplaination;
            }
          }
        }
      }
    }
  }
  return null;
}

export function runPageValidation(
  pages: Config["pages"],
  currentPage: number,
  touched: { [key: string]: boolean },
  answers: { [key: string]: any },
  validate: (question: any, value: any) => string,
  force: boolean = false
): boolean {
  let pageHasErrors = false;
  if (currentPage < pages.length) {
    pages[currentPage].sections.forEach(section => {
      if (section.questions) {
        section.questions.forEach(question => {
          if (force || touched[question.id]) {
            const error = validate(question, answers[question.id]);
            if (error) {
              pageHasErrors = true;
            }
          }
        });
      }
    });
  }
  return pageHasErrors;
}
