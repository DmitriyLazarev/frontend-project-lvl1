import { getRandomNumber } from '../../../common/modules/get-random-number.js';

const getProgression = () => {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber();
  const progressionArray = [firstNumber];
  let nextNumber = firstNumber;
  for (let i = 0; i < 9; i += 1) {
    nextNumber += step;
    progressionArray.push(nextNumber);
  }
  const randomValue = getRandomNumber(10);

  const result = progressionArray[randomValue];
  progressionArray[randomValue] = '..';

  return [progressionArray.join(' '), result];
};

export default getProgression;
