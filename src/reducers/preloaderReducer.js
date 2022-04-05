import { PRELOADER_FALSE } from "../constants";

const preloaderReducer = (state = true, action) => {
  switch (action.type) {
    case PRELOADER_FALSE:
      return false;
    default:
      return state;
  }
};
export default preloaderReducer;
