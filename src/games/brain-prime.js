import { gameCommon } from '../game-base.js';
import { getRandomNumber } from '../get-random-number.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getPrimeNumberGameQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const expectedAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const brainPrimeGame = () => {
  const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameCommon(ruleMessage, getPrimeNumberGameQuestionAndAnswer);
};

export default brainPrimeGame;
