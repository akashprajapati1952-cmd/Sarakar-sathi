
import { Scheme } from '../data/schemesData';

export interface UserInput {
  age: number;
  income: number;
  state: string;
  occupation: string;
}

export const filterSchemes = (userInput: UserInput, allSchemes: Scheme[]): Scheme[] => {
  return allSchemes.filter((scheme) => {
    const { minAge, maxAge, maxIncome, states, occupations } = scheme.eligibility;
    if (!userInput || userInput.age === undefined || userInput.income === undefined) {
      return [];
    }

    // Age check
    if (userInput.age < minAge || userInput.age > maxAge) return false;

    // Income Check
    if (maxIncome > 0 && userInput.income > maxIncome) return false;

    // State Check
    const stateMatch = states.includes('All') || states.includes(userInput.state);
    if (!stateMatch) return false;

    // Occupation Check
    const occupationMatch = occupations.includes('All') || occupations.includes(userInput.occupation);
    if (!occupationMatch) return false;

    return true;
  });
};
