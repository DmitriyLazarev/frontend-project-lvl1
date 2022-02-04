import { gameCommon } from '../../common/modules/game-base.js';
import getProgression from './modules/get-progression.js';

const brainProgressionGame = () => {
  const ruleMessage = 'What number is missing in the progression?';
  gameCommon(ruleMessage, getProgression);
};

export default brainProgressionGame;
