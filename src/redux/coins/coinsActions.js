import moment from "moment";

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

const setPriceLoading = () => {
  return {
    type: "SET_PRICE_LOADING",
  };
};

const setPriceHistory = (history) => {
  return {
    type: "SET_PRICE_HISTORY",
    payload: history,
  };
};

export const setCurrentFav = (fav) => {
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

const setTimeIntervalAction = (timeInt) => {
  return {
    type: "SET_TIME_INTERVAL",
    payload: timeInt,
  };
};

export const setTimeInterval = (timeInt) => {
  return async (dispatch) => {
    dispatch(setTimeIntervalAction(timeInt));
    dispatch(getPriceHistoryAsync());
  };
};

export const getCoinPricesAsync = () => {
  return async (dispatch, getState) => {
    dispatch(setPriceLoading());

    let favorites = getState().favorites;
    let prices = [];
    let currentFav = getState().coins.currentFav;
    let currentFavIdx = null;

    for (const [i, fav] of favorites.entries()) {
      try {
        let priceData = await cc.priceFull(fav, "USD");
        prices.push(priceData);

        if (currentFavIdx === null || fav === currentFav) {
          currentFavIdx = i;
        }
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(setCurrentFav(favorites[currentFavIdx]));
    dispatch(setPrices(prices));
    dispatch(getPriceHistoryAsync());
  };
};

export const getPriceHistoryAsync = () => {
  return async (dispatch, getState) => {
    dispatch(setPriceHistory(null));

    let currentFav = getState().coins.currentFav;
    let timeInterval = getState().coins.timeInterval;

    if (!currentFav) {
      return;
    }

    let results = [];
    for (let i = 10; i > 0; i--) {
      try {
        let res = await cc.priceHistorical(
          currentFav,
          ["USD"],
          moment()
            .subtract({ [timeInterval]: i })
            .toDate()
        );
        results.push(res);
      } catch (err) {
        console.log(err);
      }
    }

    let historical = [
      {
        name: currentFav,
        data: results.map((res, i) => [
          moment()
            .subtract({ [timeInterval]: 10 - i })
            .valueOf(),
          res.USD,
        ]),
      },
    ];
    dispatch(setPriceHistory(historical));
  };
};
