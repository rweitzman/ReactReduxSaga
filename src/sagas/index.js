import { athleteSaga } from "./athlete-saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([athleteSaga]);
}