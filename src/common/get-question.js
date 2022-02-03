import checkEvenNumber from './check-even-number.js';

export const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

export const getEvenGameNumber = () => {
  const result = getRandomNumber();
  return [result, checkEvenNumber(result)];
};

export const getCalcOperation = () => {
  const operatorsList = ['+', '-', '*'];
  const customOperator = operatorsList[Math.floor(Math.random() * operatorsList.length)];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  let result;
  if (customOperator === '+') {
    result = firstNumber + secondNumber;
  } else if (customOperator === '-') {
    result = firstNumber - secondNumber;
  } else {
    result = firstNumber * secondNumber;
  }

  return [`${firstNumber} ${customOperator} ${secondNumber}`, result];
};

export const getGreatestCommonDivisor = () => {
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

export const getProgression = () => {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber();
  const progressionArray = [firstNumber];
  let nextNumber = firstNumber;
  for (let i = 0; i < 9; i += 1) {
    nextNumber += step;
    progressionArray.push(nextNumber);
  }
  const randomValue = getRandomNumber(10);

  const result = progressionArray[randomValue];
  progressionArray[randomValue] = '..';

  return [progressionArray.join(' '), result];
};

export default getRandomNumber;
