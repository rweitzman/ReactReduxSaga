import { actionTypes } from "../actions/athlete-actions"; 

export const initialState = { athletes: [] };

export const athleteReducer = (state = initialState.athletes, { type, payload}) => {
  switch (type) {
    case actionTypes.FETCHED_ATHLETES:
      return {...state, athletes:payload};
      default:
        return state;
    }
};


