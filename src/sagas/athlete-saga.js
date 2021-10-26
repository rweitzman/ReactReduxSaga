import axios from "axios";
import { takeLatest, call, all } from "redux-saga/effects";
import { actionTypes } from "../actions/athlete-actions";

export const apiCalls = {
  getAthletes: () => axios.get("getAthleteAccounts"),
};

function* getAthletes() {
  try {
    const response = yield call(apiCalls.getAthletes);
    console.log(response.data);
  } catch (error) {}
}

export function* athleteSaga() {
  yield all([takeLatest(actionTypes.GET_ATHLETES, getAthletes)]);
}
