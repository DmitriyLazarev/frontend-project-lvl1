import readlineSync from 'readline-sync';

const getAndCheckUserAnswer = (userName, question, expectedAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // String(expectedAnswer) because userAnswer has different type in each game
  if (String(expectedAnswer) === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  return true;
};

export const gameCommon = (ruleMessage, questionAndAnswerFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleMessage);

  let result = true;
  let i = 0;
  while (result && i < 3) {
    const [question, expectedResult] = questionAndAnswerFunction();
    result = getAndCheckUserAnswer(userName, question, expectedResult);
    i += 1;
  }

  if (result) {
    console.log(`Congratulations, ${userName}!`);
  }

  return result;
};

export default gameCommon;
