import { gameCommon } from '../../common/modules/game-base.js';
import getPrimeNumber from './modules/get-prime-number.js';

const brainPrimeGame = () => {
  const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameCommon(ruleMessage, getPrimeNumber);
};

export default brainPrimeGame;
