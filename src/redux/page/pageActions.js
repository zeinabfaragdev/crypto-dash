export const setPage = (name) => {
  return {
    type: "SET_PAGE",
    payload: name,
  };
};

export const setPageLoading = () => {
  return {
    type: "SET_PAGE_LOADING",
  };
};

export const confirmFavorites = () => {
  return {
    type: "CONFIRM_FAVORITES",
  };
};
