import { combineReducers } from "redux";

import pageReducer from "./page/pageReducer";
import coinsReducer from "./coins/coinsReducer";
import favoritesReducer from "./favorites/favoritesReducer";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const pagePersistConfig = {
  key: "page",
  storage: storage,
  blacklist: ["loading"],
};

const rootReducer = combineReducers({
  page: persistReducer(pagePersistConfig, pageReducer),
  favorites: favoritesReducer,
  coins: coinsReducer,
});

export default rootReducer;
