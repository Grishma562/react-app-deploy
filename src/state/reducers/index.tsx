// combined reducers file

import { combineReducers } from "redux";
import amountReducer from "./amountReducers"
import asyncActionReducers from "./asyncActionReducer";

const reducers = combineReducers({
    amount: amountReducer,
    async : asyncActionReducers
})

export default reducers