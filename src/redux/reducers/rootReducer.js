import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";
import inputTextReducer from "./inputTextReducer";
import { commentTextReducer } from "./commentTextReducer";

export const rootReducer = combineReducers({
  likeReducer,
  inputTextReducer,
  commentTextReducer
});
