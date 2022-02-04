import { getRandomNumber } from '../../../common/modules/get-random-number.js';

const getCalcOperation = () => {
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

export default getCalcOperation;
