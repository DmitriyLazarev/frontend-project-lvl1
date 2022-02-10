import readlineSync from 'readline-sync';

const getAndCheckUserAnswer = (userName, question, expectedAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (expectedAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  return true;
};

export const gameCommon = (ruleMessage, questionAndAnswer, roundsCount = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleMessage);

  let result = true;
  let i = 0;
  while (result && i < roundsCount) {
    const [question, expectedResult] = questionAndAnswer();
    result = getAndCheckUserAnswer(userName, question, expectedResult);
    i += 1;
  }

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  }

  return result;
};

export default gameCommon;
