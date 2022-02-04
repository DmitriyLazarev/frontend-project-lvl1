import { gameCommon } from '../../common/modules/game-base.js';
import getGreatestCommonDivisor from './modules/get-greatest-common-divisor.js';

const brainGcdGame = () => {
  const ruleMessage = 'Find the greatest common divisor of given numbers.';
  gameCommon(ruleMessage, getGreatestCommonDivisor);
};

export default brainGcdGame;
