import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";


const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer
});

export default allReducers;