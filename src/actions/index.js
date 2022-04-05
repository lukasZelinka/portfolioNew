import { PRELOADER_FALSE, ACTIVE_NAV } from "../constants";

export const finishPreloader = () => ({
  type: PRELOADER_FALSE,
});

export const whiteNavbar = () => ({
  type: ACTIVE_NAV.TRUE,
});

export const transparentNavbar = () => ({
  type: ACTIVE_NAV.FALSE,
});
