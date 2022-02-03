import readlineSync from 'readline-sync';
import greetingAndIntroduction from '../cli.js';
import wrongAnswerMessage from './wrong-answer-message.js';
import getRandomNumber from './get-random-number.js';
import checkEvenNumber from './check-even-number.js';
import rightAnswerMessage from './right-answer-message.js';

const brainEvenGame = () => {
  const name = greetingAndIntroduction();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkEvenNumber(question) === answer) {
      rightAnswerMessage();
    } else {
      wrongAnswerMessage(checkEvenNumber(question), answer);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEvenGame;
