import { gameCommon } from '../../common/modules/game-base.js';
import { getRandomNumber } from '../../common/modules/get-random-number.js';

const getCalcGameQuestionAndAnswer = () => {
  const operatorsList = ['+', '-', '*'];
  const customOperator = getRandomNumber(operatorsList.length);
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${customOperator} ${secondNumber}`;

  let expectedAnswer;
  if (customOperator === '+') {
    expectedAnswer = firstNumber + secondNumber;
  } else if (customOperator === '-') {
    expectedAnswer = firstNumber - secondNumber;
  } else {
    expectedAnswer = firstNumber * secondNumber;
  }

  return [question, expectedAnswer];
};

const brainCalcGame = () => {
  const ruleMessage = 'What is the result of the expression?';
  gameCommon(ruleMessage, getCalcGameQuestionAndAnswer);
};

export default brainCalcGame;
