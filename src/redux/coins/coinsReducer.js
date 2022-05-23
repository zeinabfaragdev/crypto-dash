const coinsReducer = (
  state = { priceLoading: true, coinLoading: true },
  action
) => {
  switch (action.type) {
    case "SET_COINS":
      return { ...state, list: action.payload, coinLoading: false };
    case "SET_PRICES":
      return { ...state, prices: action.payload, priceLoading: false };
    case "SET_PRICE_LOADING":
      return { ...state, priceLoading: true };
    case "SET_PRICE_HISTORY":
      return { ...state, priceHistory: action.payload };
    case "SET_CURRENT_FAV":
      return { ...state, currentFav: action.payload };
    case "FILTER_COINS":
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
};

export default coinsReducer;
