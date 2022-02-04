import readlineSync from 'readline-sync';
import rightAnswerMessage from './right-answer-message.js';
import wrongAnswerMessage from './wrong-answer-message.js';
import greetingAndIntroduction from '../../cli.js';
import congratulationMessage from './congratulation-message.js';

const gameResult = (userName, questionString, questionResult) => {
  let result = true;
  console.log(`Question: ${questionString}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // String(questionResult) because userAnswer has different type in each game
  if (String(questionResult) === userAnswer) {
    rightAnswerMessage();
  } else {
    wrongAnswerMessage(questionResult, userAnswer, userName);
    result = false;
    return result;
  }
  return result;
};

export const gameCommon = (ruleMessage, questionResultFunction) => {
  const userName = greetingAndIntroduction();
  console.log(ruleMessage);

  let result = true;
  let i = 0;
  while (result && i < 3) {
    const [questionString, questionResult] = questionResultFunction();
    result = gameResult(userName, questionString, questionResult);
    i += 1;
  }

  if (result) {
    congratulationMessage(userName);
  }

  return result;
};

export default gameCommon;
