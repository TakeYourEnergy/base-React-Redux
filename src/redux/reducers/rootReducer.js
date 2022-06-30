import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";
import inputTextReducer from "./inputTextReducer";

export const rootReducer = combineReducers({
   likeReducer,
   inputTextReducer
})