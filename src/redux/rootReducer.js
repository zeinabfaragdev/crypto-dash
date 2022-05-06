import { combineReducers } from "redux";

import pageReducer from "./page/pageReducer";
import coinsReducer from "./coins/coinsReducer";

const rootReducer = combineReducers({
  page: pageReducer,
  coins: coinsReducer,
});

export default rootReducer;
