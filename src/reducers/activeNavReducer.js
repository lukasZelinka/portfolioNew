import { ACTIVE_NAV } from "../constants";

const activeNavReducer = (state = false, action) => {
  switch (action.type) {
    case ACTIVE_NAV.TRUE:
      return true;
    case ACTIVE_NAV.FALSE:
      return false;
    default:
      return state;
  }
};
export default activeNavReducer;
