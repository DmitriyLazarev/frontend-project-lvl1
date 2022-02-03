import readlineSync from 'readline-sync';
import rightAnswerMessage from './right-answer-message.js';
import wrongAnswerMessage from './wrong-answer-message.js';
import greetingAndIntroduction from '../cli.js';
import congratulationMessage from './congratulation-message.js';
import {
  getCalcOperation,
  getEvenGameNumber, getGreatestCommonDivisor, getPrimeNumber, getProgression,
} from './get-question.js';

const gameResult = (userName, questionString, questionResult) => {
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

export const gameCommon = (ruleMessage, gameType) => {
  const userName = greetingAndIntroduction();
  console.log(ruleMessage);

  let result = true;
  let i = 0;
  let questionArray;
  while (result && i < 3) {
    switch (gameType) {
      case 'even':
        questionArray = getEvenGameNumber();
        break;
      case 'calc':
        questionArray = getCalcOperation();
        break;
      case 'gcd':
        questionArray = getGreatestCommonDivisor();
        break;
      case 'progression':
        questionArray = getProgression();
        break;
      case 'prime':
        questionArray = getPrimeNumber();
        break;
      default:
        console.log('Invalid game type');
        return false;
    }

    const questionString = questionArray[0];
    const questionResult = questionArray[1];
    result = gameResult(userName, questionString, questionResult);
    i += 1;
  }

  if (result) {
    congratulationMessage(userName);
  }

  return result;
};

export default gameCommon;
