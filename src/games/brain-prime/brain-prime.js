import { gameCommon } from '../../common/modules/game-base.js';
import { getRandomNumber } from '../../common/modules/get-random-number.js';

const getPrimeNumberGameQuestionAndAnswer = () => {
  const question = getRandomNumber();
  let expectedAnswer = 'yes';

  if (question === 2 && question === 1) {
    return [question, expectedAnswer];
  }

  let i = 2;
  const limit = Math.sqrt(question);
  while (i <= limit) {
    if (question % i === 0) {
      expectedAnswer = 'no';
    }
    i += 1;
  }

  return [question, expectedAnswer];
};

const brainPrimeGame = () => {
  const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameCommon(ruleMessage, getPrimeNumberGameQuestionAndAnswer);
};

export default brainPrimeGame;
