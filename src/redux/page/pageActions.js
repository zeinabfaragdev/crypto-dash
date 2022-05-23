import { getCoinPricesAsync } from "../coins/coinsActions";

export const setPage = (name) => {
  return {
    type: "SET_PAGE",
    payload: name,
  };
};

export const setTheme = (theme) => {
  return {
    type: "SET_THEME",
    payload: theme,
  };
};

const confirmPageFavorites = () => {
  return {
    type: "CONFIRM_FAVORITES",
  };
};

export const confirmFavorites = () => {
  return (dispatch) => {
    dispatch(confirmPageFavorites());
    dispatch(getCoinPricesAsync());
  };
};
