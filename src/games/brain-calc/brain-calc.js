import { gameCommon } from '../../common/modules/game-base.js';
import { getRandomNumber } from '../../common/modules/get-random-number.js';

const getRandomCalculationOperatorAndAnswer = (number1, number2) => {
  const operatorsList = ['+', '-', '*'];
  const customOperator = operatorsList[getRandomNumber(operatorsList.length)];

  let expectedAnswer;
  if (customOperator === '+') {
    expectedAnswer = number1 + number2;
  } else if (customOperator === '-') {
    expectedAnswer = number1 - number2;
  } else {
    expectedAnswer = number1 * number2;
  }

  return [customOperator, expectedAnswer];
};

const getCalcGameQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const [customOperator, expectedAnswer] = getRandomCalculationOperatorAndAnswer(firstNumber, secondNumber);
  const question = `${firstNumber} ${customOperator} ${secondNumber}`;

  return [question, expectedAnswer];
};

const brainCalcGame = () => {
  const ruleMessage = 'What is the result of the expression?';
  gameCommon(ruleMessage, getCalcGameQuestionAndAnswer);
};

export default brainCalcGame;
