import { gameCommon } from '../common/game-base.js';

const brainCalcGame = () => {
  const ruleMessage = 'What is the result of the expression?';
  gameCommon(ruleMessage, 'calc');
};

export default brainCalcGame;
