import { gameCommon } from '../../common/modules/game-base.js';
import getCalcOperation from './modules/get-calc-operation.js';

const brainCalcGame = () => {
  const ruleMessage = 'What is the result of the expression?';
  gameCommon(ruleMessage, getCalcOperation);
};

export default brainCalcGame;
