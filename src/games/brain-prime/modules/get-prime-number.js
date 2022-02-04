import { getRandomNumber } from '../../../common/modules/get-random-number.js';

const getPrimeNumber = () => {
  const number = getRandomNumber();
  let result = 'yes';

  if (number === 2 && number === 1) {
    return [number, result];
  }

  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      result = 'no';
    }
    i += 1;
  }

  return [number, result];
};

export default getPrimeNumber;
