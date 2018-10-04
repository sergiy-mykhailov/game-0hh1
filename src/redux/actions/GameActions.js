
export const clearGameState = () => (dispatch, getState) => {
  dispatch({ type: 'CLEAR_GAME_STATE_SUCCESS', getState });
};
