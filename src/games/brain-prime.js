import gameBase from '../common/game-base.js';
import greetingAndIntroduction from '../cli.js';
import congratulationMessage from '../common/congratulation-message.js';
import { getPrimeNumber } from '../common/get-question.js';

const brainPrimeGame = () => {
  const userName = greetingAndIntroduction();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let result = true;
  let i = 0;
  while (result && i < 3) {
    const questionArray = getPrimeNumber();
    const questionString = questionArray[0];
    const questionResult = questionArray[1];
    result = gameBase(userName, questionString, questionResult);
    i += 1;
  }

  if (result) {
    congratulationMessage(userName);
  }
};

export default brainPrimeGame;
