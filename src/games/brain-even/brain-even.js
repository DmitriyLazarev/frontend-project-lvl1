import { gameCommon } from '../../common/modules/game-base.js';
import getEvenGameNumber from './modules/get-even-game-number.js';

const brainEvenGame = () => {
  const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameCommon(ruleMessage, getEvenGameNumber);
};

export default brainEvenGame;
