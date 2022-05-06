const savedSettings = () => {
  let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

  return cryptoDashData
    ? cryptoDashData
    : { type: "settings", firstVisit: true };
};

const pageReducer = (state = savedSettings(), action) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        type: action.payload,
      };
    case "CONFIRM_FAVORITES":
      let newState = {
        ...state,
        firstVisit: false,
        type: "dashboard",
      };

      localStorage.setItem("cryptoDash", JSON.stringify(newState));

      return newState;

    default:
      return state;
  }
};

export default pageReducer;
