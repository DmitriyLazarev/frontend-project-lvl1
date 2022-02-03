const checkAnswer = (result, correctAnswer, userAnswer, userName) => {
    if (!result) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
};

export default checkAnswer;
