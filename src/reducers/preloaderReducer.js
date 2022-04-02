import { TryRounded } from "@mui/icons-material";
import { PRELOADER } from "../constants";

const preloaderReducer = (state = true, action) => {
  switch (action.type) {
    case PRELOADER.TRUE:
      return true;
    case PRELOADER.FALSE:
      return false;
    default:
      return state;
  }
};
export default preloaderReducer;
