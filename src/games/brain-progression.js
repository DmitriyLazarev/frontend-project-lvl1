import { gameCommon } from '../common/game-base.js';

const brainProgressionGame = () => {
  const ruleMessage = 'What number is missing in the progression?';
  gameCommon(ruleMessage, 'progression');
};

export default brainProgressionGame;
