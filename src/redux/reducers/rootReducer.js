import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";
import inputTextReducer from "./inputTextReducer";
import { commentTextReducer } from "./commentTextReducer";
import { loaderReducer } from "./loaderReducer";

export const rootReducer = combineReducers({
  likeReducer,
  inputTextReducer,
  commentTextReducer,
  loaderReducer
});
