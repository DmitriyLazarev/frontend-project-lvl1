import gameBase from '../common/game-base.js';
import greetingAndIntroduction from '../cli.js';
import congratulationMessage from '../common/congratulation-message.js';
import { getProgression } from '../common/get-question.js';

const brainProgressionGame = () => {
  const userName = greetingAndIntroduction();
  console.log('What number is missing in the progression?');

  let result = true;
  let i = 0;
  while (result && i < 3) {
    const questionArray = getProgression();
    const questionString = questionArray[0];
    const questionResult = questionArray[1];
    result = gameBase(userName, questionString, questionResult);
    i += 1;
  }

  if (result) {
    congratulationMessage(userName);
  }
};

export default brainProgressionGame;
