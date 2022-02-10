import { gameCommon } from '../game-base.js';
import { getRandomNumber } from '../get-random-number.js';

const getRandomOperator = () => {
  const operatorsList = ['+', '-', '*'];
  return operatorsList[getRandomNumber(operatorsList.length)];
};

const getCalculation = (number1, number2, operator) => {
  let result;
  if (operator === '+') {
    result = number1 + number2;
  } else if (operator === '-') {
    result = number1 - number2;
  } else {
    result = number1 * number2;
  }

  return result;
};

const getCalcGameQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = getRandomOperator();
  const expectedAnswer = String(getCalculation(firstNumber, secondNumber, operator));
  const question = `${firstNumber} ${operator} ${secondNumber}`;

  return [question, expectedAnswer];
};

const brainCalcGame = () => {
  const ruleMessage = 'What is the result of the expression?';
  gameCommon(ruleMessage, getCalcGameQuestionAndAnswer);
};

export default brainCalcGame;
