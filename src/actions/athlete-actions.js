export const actionTypes = {
  GET_ATHLETES: "GET_ATHLETES",
  FETCHED_ATHLETES: "FETCHED_ATHLETES"
};

export const actions = {
  getAthletes: () => ({
    type: actionTypes.GET_ATHLETES
  }),
  fetchedAllAthletes: (payload)=>({
    type: actionTypes.FETCHED_ATHLETES,
    payload
  })
};
