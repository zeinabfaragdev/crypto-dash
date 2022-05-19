const coinsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_COINS":
      return { ...state, list: action.payload };
    case "SET_PRICES":
      return { ...state, prices: action.payload };
    case "FILTER_COINS":
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
};

export default coinsReducer;
