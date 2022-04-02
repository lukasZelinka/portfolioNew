import { PRELOADER, ACTIVE_NAV } from "../constants";

export const startPreloader = () => ({
  type: PRELOADER.TRUE,
});

export const finishPreloader = () => ({
  type: PRELOADER.FALSE,
});

export const whiteNavbar = () => ({
  type: ACTIVE_NAV.TRUE,
});

export const transparentNavbar = () => ({
  type: ACTIVE_NAV.FALSE,
});
