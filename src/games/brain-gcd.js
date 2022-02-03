import { gameCommon } from '../common/game-base.js';

const brainGcdGame = () => {
  const ruleMessage = 'Find the greatest common divisor of given numbers.';
  gameCommon(ruleMessage, 'gcd');
};

export default brainGcdGame;
