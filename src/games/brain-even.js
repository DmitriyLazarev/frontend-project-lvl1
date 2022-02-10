import { gameCommon } from '../game-base.js';
import { getRandomNumber } from '../get-random-number.js';

const isEven = (number) => number % 2 === 0;

const getEvenGameQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const expectedAnswer = isEven(question) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const brainEvenGame = () => {
  const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameCommon(ruleMessage, getEvenGameQuestionAndAnswer);
};

export default brainEvenGame;
