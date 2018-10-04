
import { combineReducers } from 'redux';
import gameState, * as fromGame from './GameReducer';

export default combineReducers({
  gameState,
});

// export const getGameStateFromStore = state => fromGame.getGameStateFromStore(state.game);
