import gameBase from '../common/game-base.js';
import greetingAndIntroduction from '../cli.js';
import congratulationMessage from '../common/congratulation-message.js';
import { getGreatestCommonDivisor } from '../common/get-question.js';

const brainGcdGame = () => {
  const userName = greetingAndIntroduction();
  console.log('Find the greatest common divisor of given numbers.');

  let result = true;
  let i = 0;
  while (result && i < 3) {
    const questionArray = getGreatestCommonDivisor();
    const questionString = questionArray[0];
    const questionResult = questionArray[1];
    result = gameBase(userName, questionString, questionResult);
    i += 1;
  }

  if (result) {
    congratulationMessage(userName);
  }
};

export default brainGcdGame;
