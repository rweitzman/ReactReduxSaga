import axios from "axios";
import { takeLatest, call, all , put } from "redux-saga/effects";
import { actionTypes , actions } from "../actions/card-actions";

export const apiCalls = {
  getCards: () => axios.get(),
};

function* getCards() {
  try {
    const response = yield call(apiCalls.getCards);
   yield put(actions.fetchedAllCards(response.data))
   console.log("data:", response.data)
  } catch (error) {}
}

export function* cardSaga() {
  yield all([takeLatest(actionTypes.GET_CARDS, getCards)]);
}
