import { gameCommon } from '../common/game-base.js';

const brainEvenGame = () => {
  const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameCommon(ruleMessage, 'even');
};

export default brainEvenGame;
