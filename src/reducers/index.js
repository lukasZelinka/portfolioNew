import { combineReducers } from "redux";
import preloaderReducer from "./preloaderReducer";

const rootReducer = combineReducers({
  preloading: preloaderReducer,
});

export default rootReducer;
