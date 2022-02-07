import { gameCommon } from '../../common/modules/game-base.js';
import { getRandomNumber } from '../../common/modules/get-random-number.js';

const getProgressionGameQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber();
  const progressionArray = [firstNumber];

  let nextNumber = firstNumber;
  for (let i = 0; i < 9; i += 1) {
    nextNumber += step;
    progressionArray.push(nextNumber);
  }

  const randomProgressionNumber = getRandomNumber(10);
  const expectedAnswer = progressionArray[randomProgressionNumber];
  progressionArray[randomProgressionNumber] = '..';

  const question = progressionArray.join(' ');

  return [question, expectedAnswer];
};

const brainProgressionGame = () => {
  const ruleMessage = 'What number is missing in the progression?';
  gameCommon(ruleMessage, getProgressionGameQuestionAndAnswer);
};

export default brainProgressionGame;
