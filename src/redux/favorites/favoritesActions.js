const addCoin = (coin) => {
  return {
    type: "ADD_COIN",
    payload: coin,
  };
};

export const addFavoriteCoin = (coin) => {
  const MAX_FAVORITES = 10;

  return async (dispatch, getState) => {
    let favorites = getState().favorites;

    if (favorites.length < MAX_FAVORITES) {
      dispatch(addCoin(coin));
    }
  };
};

export const removeCoin = (coin) => {
  return {
    type: "REMOVE_COIN",
    payload: coin,
  };
};
