import { PRELOADER } from "../constants";

const startPreloader = () => ({
  type: PRELOADER.TRUE,
});

const finishPreloader = () => ({
  type: PRELOADER.FALSE,
});

export { startPreloader, finishPreloader };
