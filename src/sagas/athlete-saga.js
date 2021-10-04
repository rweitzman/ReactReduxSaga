import axios from "axios";
import { takeLatest, call } from "redux-saga/effects";
import { actionTypes } from "../actions/athlete-actions";

export const apiCalls = {
  getAthletes: () => axios.get("todo"),
};

function* getAthletes() {
  try {
    const response = yield call(apiCalls.getAthletes);
    console.log(response);
  } catch (error) {}
}

export const athleteSaga = [takeLatest(actionTypes.GET_ATHLETES, getAthletes)];
