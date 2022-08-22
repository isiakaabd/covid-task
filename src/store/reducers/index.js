import { combineReducers } from "redux";
import fetchDataReducer from "./fetchDataReducer";

const reducers = combineReducers({
  fetchData: fetchDataReducer,
});

export default reducers;
