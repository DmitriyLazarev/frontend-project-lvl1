import gameBase from '../common/game-base.js';
import greetingAndIntroduction from '../cli.js';
import congratulationMessage from '../common/congratulation-message.js';
import getQuestion from '../common/get-question.js';
import checkEvenNumber from '../common/check-even-number.js';

const brainEvenGame = () => {
  const userName = greetingAndIntroduction();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result = true;
  let i = 0;
  while (result && i < 3) {
    const questionString = getQuestion('even');
    const questionResult = checkEvenNumber(questionString);
    result = gameBase(userName, questionString, questionResult);
    i += 1;
  }

  if (result) {
    congratulationMessage(userName);
  }
};

export default brainEvenGame;
