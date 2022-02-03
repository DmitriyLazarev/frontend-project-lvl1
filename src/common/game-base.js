import readlineSync from 'readline-sync';
import rightAnswerMessage from './right-answer-message.js';
import wrongAnswerMessage from './wrong-answer-message.js';

const gameBase = (userName, questionString, questionResult) => {
  let result = true;
  console.log(`Question: ${questionString}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // questionResult.toString because userAnswer has different type in each game
  if (questionResult.toString() === userAnswer) {
    rightAnswerMessage();
  } else {
    wrongAnswerMessage(questionResult, userAnswer, userName);
    result = false;
    return result;
  }
  return result;
};

export default gameBase;
