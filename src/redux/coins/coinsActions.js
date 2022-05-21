const cc = require("cryptocompare");
cc.setApiKey(process.env.REACT_APP_CRYPTO_KEY);

const setCoins = (coins) => {
  return {
    type: "SET_COINS",
    payload: coins,
  };
};

const setPrices = (prices) => {
  return {
    type: "SET_PRICES",
    payload: prices,
  };
};

const setCurrentFav = (fav) => {
  return {
    type: "SET_CURRENT_FAV",
    payload: fav,
  };
};

export const setFilteredCoins = (coins) => {
  return {
    type: "FILTER_COINS",
    payload: coins,
  };
};

export const getCoinsAsync = () => {
  return async (dispatch) => {
    let coinList = (await cc.coinList()).Data;

    dispatch(setCoins(coinList));
  };
};

export const getCoinPricesAsync = () => {
  return async (dispatch, getState) => {
    let favorites = getState().favorites;
    let prices = [];
    let currentFavIdx = null;

    for (const [i, fav] of favorites.entries()) {
      try {
        let priceData = await cc.priceFull(fav, "USD");
        prices.push(priceData);

        if (currentFavIdx === null) {
          currentFavIdx = i;
        }
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(setPrices(prices));
    dispatch(setCurrentFav(favorites[currentFavIdx]));
  };
};
