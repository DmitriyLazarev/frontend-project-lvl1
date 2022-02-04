import { getRandomNumber } from '../../../common/modules/get-random-number.js';

const getGreatestCommonDivisor = () => {
  let firstNumber = getRandomNumber();
  let secondNumber = getRandomNumber();
  const numbers = `${firstNumber} ${secondNumber}`;
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  return [numbers, firstNumber];
};

export default getGreatestCommonDivisor;
