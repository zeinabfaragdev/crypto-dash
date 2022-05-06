const cc = require("cryptocompare");

cc.setApiKey(process.env.REACT_APP_CRYPTO_KEY);

const setCoins = (coins) => {
  return {
    type: "SET_COINS",
    payload: coins,
  };
};

export const getCoinsAsync = () => {
  return async (dispatch) => {
    let coinList = (await cc.coinList()).Data;

    dispatch(setCoins(coinList));
  };
};
