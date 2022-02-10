import { gameCommon } from '../game-base.js';
import { getRandomNumber } from '../get-random-number.js';

const findGcd = (number1, number2) => {
  let firstNumber = number1;
  let secondNumber = number2;
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  return firstNumber;
};

const getGcdGameQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const question = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = String(findGcd(firstNumber, secondNumber));

  return [question, expectedAnswer];
};

const brainGcdGame = () => {
  const ruleMessage = 'Find the greatest common divisor of given numbers.';
  gameCommon(ruleMessage, getGcdGameQuestionAndAnswer);
};

export default brainGcdGame;
