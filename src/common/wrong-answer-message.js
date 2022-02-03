const wrongAnswerMessage = (rightAnswer, userAnswer, userName) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
};

export default wrongAnswerMessage;
