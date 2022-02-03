import { gameCommon } from '../common/game-base.js';

const brainPrimeGame = () => {
  const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameCommon(ruleMessage, 'prime');
};

export default brainPrimeGame;
