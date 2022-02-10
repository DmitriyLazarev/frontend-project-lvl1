import { gameCommon } from '../game-base.js';
import { checkRandomNumberByCondition } from '../check-random-number.js';

const isEven = (number) => number % 2 === 0;

const getEvenGameQuestionAndAnswer = () => checkRandomNumberByCondition(isEven);

const brainEvenGame = () => {
  const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameCommon(ruleMessage, getEvenGameQuestionAndAnswer);
};

export default brainEvenGame;
