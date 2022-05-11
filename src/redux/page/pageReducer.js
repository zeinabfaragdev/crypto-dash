const pageReducer = (
  state = { type: "settings", firstVisit: true, loading: true },
  action
) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        type: action.payload,
      };
    case "CONFIRM_FAVORITES":
      return {
        ...state,
        firstVisit: false,
        type: "dashboard",
      };

    case "SET_PAGE_LOADING":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default pageReducer;
