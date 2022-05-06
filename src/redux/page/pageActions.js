export const setPage = (name) => {
  return {
    type: "SET_PAGE",
    payload: name,
  };
};

export const confirmFavorites = () => {
  return {
    type: "CONFIRM_FAVORITES",
  };
};
