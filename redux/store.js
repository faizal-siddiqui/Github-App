import { legacy_createStore, compose, applyMiddleware } from "redux";
import { dataReducer } from "./data.reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  dataReducer,
  composeEnhancer(applyMiddleware(thunk))
);
