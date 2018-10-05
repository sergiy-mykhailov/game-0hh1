
export const clearGameState = () => (dispatch, getState) => {
  dispatch({ type: 'CLEAR_GAME_STATE_SUCCESS', getState });
};

export const startGame = () => (dispatch, getState) => {
  dispatch({ type: 'START_GAME_SUCCESS', getState });
};
