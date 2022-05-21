const coinsReducer = (
  state = { priceLoading: true, coinLoading: true, currentFav: {} },
  action
) => {
  switch (action.type) {
    case "SET_COINS":
      return { ...state, list: action.payload, coinLoading: false };
    case "SET_PRICES":
      return { ...state, prices: action.payload, priceLoading: false };
    case "SET_CURRENT_FAV":
      return { ...state, currentFav: action.payload };
    case "FILTER_COINS":
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
};

export default coinsReducer;
