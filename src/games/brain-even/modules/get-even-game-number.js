import checkEvenNumber from './check-even-number.js';
import { getRandomNumber } from '../../../common/modules/get-random-number.js';

const getEvenGameNumber = () => {
  const result = getRandomNumber();
  return [result, checkEvenNumber(result)];
};

export default getEvenGameNumber;
