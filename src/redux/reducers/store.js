import { createStore, combineReducers } from "redux";
import { clientReducer } from "./clientReducer";
export const store = createStore(
  combineReducers({
    client: clientReducer,
  })
);
