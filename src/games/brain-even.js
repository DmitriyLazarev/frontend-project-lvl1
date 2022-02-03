import gameBase from '../common/game-base.js';
import greetingAndIntroduction from '../cli.js';
import congratulationMessage from '../common/congratulation-message.js';
import { getEvenGameNumber } from '../common/get-question.js';

const brainEvenGame = () => {
  const userName = greetingAndIntroduction();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result = true;
  let i = 0;
  while (result && i < 3) {
    const questionArray = getEvenGameNumber();
    const questionString = questionArray[0];
    const questionResult = questionArray[1];
    result = gameBase(userName, questionString, questionResult);
    i += 1;
  }

  if (result) {
    congratulationMessage(userName);
  }
};

export default brainEvenGame;
