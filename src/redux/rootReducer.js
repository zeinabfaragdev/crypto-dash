import { combineReducers } from "redux";

import pageReducer from "./page/pageReducer";
import coinsReducer from "./coins/coinsReducer";
import favoritesReducer from "./favorites/favoritesReducer";

const rootReducer = combineReducers({
  page: pageReducer,
  favorites: favoritesReducer,
  coins: coinsReducer,
});

export default rootReducer;
