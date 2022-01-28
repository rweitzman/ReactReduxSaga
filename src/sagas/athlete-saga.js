import axios from "axios";
import { takeLatest, call, all , put } from "redux-saga/effects";
import { actionTypes , actions } from "../actions/athlete-actions";

export const apiCalls = {
  getAthletes: () => axios.get("getAthleteAccounts"),
};

function* getAthletes() {
  try {
    const response = yield call(apiCalls.getAthletes);
   yield put(actions.fetchedAllAthletes(response.data))
   console.log("data:", response.data)
  } catch (error) {}
}

export function* athleteSaga() {
  yield all([takeLatest(actionTypes.GET_ATHLETES, getAthletes)]);
}
