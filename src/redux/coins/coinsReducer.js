const coinsReducer = (state = { loading: true, list: {} }, action) => {
  switch (action.type) {
    case "SET_COINS":
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default coinsReducer;
