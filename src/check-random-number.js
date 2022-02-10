import { getRandomNumber } from './get-random-number.js';

export const checkRandomNumberByCondition = (condition) => {
  const number = getRandomNumber();
  const result = condition(number) ? 'yes' : 'no';
  return [number, result];
};

export default checkRandomNumberByCondition;
