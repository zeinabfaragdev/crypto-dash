const coinsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_COINS":
      return action.payload;
    default:
      return state;
  }
};

export default coinsReducer;
