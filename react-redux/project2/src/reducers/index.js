import { combineReducers } from "redux";
import arrayReducer from './arrayReducer';

const allReducers = combineReducers({
    arrayReducer
});

export default allReducers;