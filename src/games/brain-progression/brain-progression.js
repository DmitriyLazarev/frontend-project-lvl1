import { gameCommon } from '../../common/modules/game-base.js';
import { getRandomNumber } from '../../common/modules/get-random-number.js';

const getProgression = (progressionLength = 10) => {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber();
  const result = [firstNumber];

  let nextNumber = firstNumber;
  for (let i = 0; i < progressionLength - 1; i += 1) {
    nextNumber += step;
    result.push(nextNumber);
  }

  return result;
};

const getProgressionGameQuestionAndAnswer = () => {
  const randomProgressionNumber = getRandomNumber(10);
  const progression = getProgression();

  const expectedAnswer = progression[randomProgressionNumber];
  progression[randomProgressionNumber] = '..';
  const question = progression.join(' ');

  return [question, expectedAnswer];
};

const brainProgressionGame = () => {
  const ruleMessage = 'What number is missing in the progression?';
  gameCommon(ruleMessage, getProgressionGameQuestionAndAnswer);
};

export default brainProgressionGame;
