import { combineReducers } from "redux";
import { resultReducer } from "./Reducers";

export const allReducers = combineReducers({
  result: resultReducer
});
