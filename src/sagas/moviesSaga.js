import { takeEvery, put, call } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
function countdown() {
  return eventChannel((emitter) => {
    if (window.scrollY > 40) {
      console.log(1);
      // whiteNavbar();
    } else {
      // transparentNavbar();
      console.log(2);
    }
    document.addEventListener("scroll", emitter);
    return () => document.removeEventListener("scroll", emitter);
  });
}
export default function* moviesSaga() {
  yield call(countdown);
}
