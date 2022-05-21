import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pageReducer from "./page/pageReducer";
import coinsReducer from "./coins/coinsReducer";
import favoritesReducer from "./favorites/favoritesReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["coins"],
};

const coinsConfig = {
  key: "coins",
  storage,
  whitelist: ["currentFav"],
};

const rootReducer = combineReducers({
  page: pageReducer,
  favorites: favoritesReducer,
  coins: persistReducer(coinsConfig, coinsReducer),
});

export default persistReducer(persistConfig, rootReducer);
