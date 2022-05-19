import { setPageLoading } from "../page/pageActions";

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
    dispatch(setPageLoading());
  };
};

export const getCoinPricesAsync = () => {
  return async (dispatch, getState) => {
    let favorites = getState().favorites;
    let prices = [];

    for (const fav of favorites) {
      try {
        let priceData = await cc.priceFull(fav, "USD");
        prices.push(priceData);
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(setPrices(prices));
  };
};
