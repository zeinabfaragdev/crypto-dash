import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

export let store = createStore(rootReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);
