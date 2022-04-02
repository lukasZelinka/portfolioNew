import { combineReducers } from "redux";
import preloaderReducer from "./preloaderReducer";
import activeNavReducer from "./activeNavReducer";

const rootReducer = combineReducers({
  preloading: preloaderReducer,
  activeNav: activeNavReducer,
});

export default rootReducer;
