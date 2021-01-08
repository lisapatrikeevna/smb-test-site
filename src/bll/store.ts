import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import registerReduser from "./registration-reduser";

let reducer = combineReducers({
    registration:registerReduser,
})
export const store=createStore(reducer ,applyMiddleware(thunk));

export type AppStoreType = ReturnType<typeof reducer>
// @ts-ignore
window.store = store;
export default store;