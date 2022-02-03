import gameBase from '../common/game-base.js';
import greetingAndIntroduction from '../cli.js';
import congratulationMessage from '../common/congratulation-message.js';
import getQuestion from '../common/get-question.js';

const brainCalcGame = () => {
  const userName = greetingAndIntroduction();
  console.log('What is the result of the expression?');

  let result = true;
  let i = 0;
  while (result && i < 3) {
    const questionArray = getQuestion('calc');
    const questionString = questionArray[0];
    const questionResult = questionArray[1];
    result = gameBase(userName, questionString, questionResult);
    i += 1;
  }

  if (result) {
    congratulationMessage(userName);
  }
};

export default brainCalcGame;
