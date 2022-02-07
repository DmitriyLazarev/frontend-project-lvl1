import { gameCommon } from '../../common/modules/game-base.js';
import { getRandomNumber } from '../../common/modules/get-random-number.js';

const getGcdGameQuestionAndAnswer = () => {
  let firstNumber = getRandomNumber();
  let secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;

  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }

  const expectedAnswer = firstNumber;

  return [question, expectedAnswer];
};

const brainGcdGame = () => {
  const ruleMessage = 'Find the greatest common divisor of given numbers.';
  gameCommon(ruleMessage, getGcdGameQuestionAndAnswer);
};

export default brainGcdGame;
