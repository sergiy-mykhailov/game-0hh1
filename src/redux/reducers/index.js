
import { combineReducers } from 'redux';
import game from './GameReducer';

export default combineReducers({
  game,
});

// export const getGameStateFromStore = state => fromGame.getGameStateFromStore(state.game);
