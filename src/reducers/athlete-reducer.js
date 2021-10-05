import { combineReducers } from "redux";
/* import { actionTypes } from "../actions/athlete-actions"; */

export const initialState = { athletes: [] };

export const athleteReducer = combineReducers({
  athletes: (state = initialState.athletes, { type, payload }) => {
    switch (type) {
      default:
        return state;
    }
  },
});
