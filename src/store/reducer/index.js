import { combineReducers } from "redux";
import safesReducer from "./safesReducer"

const reducers = combineReducers({
    safes:safesReducer
})

export default reducers;