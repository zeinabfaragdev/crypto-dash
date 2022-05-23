const pageReducer = (
  state = { type: "settings", firstVisit: true, theme: "dark" },
  action
) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        type: action.payload,
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "CONFIRM_FAVORITES":
      return {
        ...state,
        firstVisit: false,
        type: "dashboard",
      };

    default:
      return state;
  }
};

export default pageReducer;
