export const actionTypes = {
  GET_CARDS: "GET_CARDS",
  FETCHED_CARDS: "FETCHED_CARDS"
};

export const actions = {
  getCards: () => ({
    type: actionTypes.GET_CARDS
  }),
  fetchedAllCards: (payload)=>({
    type: actionTypes.FETCHED_CARDS,
    payload
  })
};
