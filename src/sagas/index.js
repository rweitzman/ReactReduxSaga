import { cardSaga } from "./card-saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([cardSaga()]);
}
