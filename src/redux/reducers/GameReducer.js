
import { combineReducers } from 'redux';

const defaultState = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const gameReducer = (state = defaultState, action) => {
  switch (action.type) {
    // case 'FETCH_GAME_STATE_SUCCESS':
    //   return action.trainingDetails;

    case 'CLEAR_GAME_STATE_SUCCESS':
      return defaultState;

    default:
      return state;
  }
};

export default combineReducers({
  game: gameReducer,
});

// export const getGameStateFromStore = state => state.game;
