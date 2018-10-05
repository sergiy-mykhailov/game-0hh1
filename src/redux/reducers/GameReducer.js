
import { combineReducers } from 'redux';

const defaultState = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const started = (state = false, action) => {
  switch (action.type) {
    case 'START_GAME_SUCCESS':
      return true;

    default:
      return state;
  }
};

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
  state: gameReducer,
  isStarted: started,
});

// export const getGameStateFromStore = state => state.game;
