import { actionTypes } from "../actions/card-actions"; 

export const initialState = { cards: [] };

export const cardReducer = (state = initialState.cards, { type, payload}) => {
  switch (type) {
    case actionTypes.FETCHED_CARDS:
      return {...state, cards:payload};
      default:
        return state;
    }
};


