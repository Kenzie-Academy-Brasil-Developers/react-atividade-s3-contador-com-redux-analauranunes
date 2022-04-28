import { legacy_createStore as createStore, combineReducers } from "redux";
import { reducerCounter } from "../Modules/reducer";

const reducers = combineReducers({ counter: reducerCounter });

export const store = createStore(reducers);
