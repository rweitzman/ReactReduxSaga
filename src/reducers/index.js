import { combineReducers } from "redux";
import { athleteReducer } from "./athlete-reducer";

export const rootReducer = combineReducers({
 allAthletes:athleteReducer,
});
