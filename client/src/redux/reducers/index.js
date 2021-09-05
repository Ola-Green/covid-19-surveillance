import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { alertReducer } from "./alertReducer";
import { profileReducer } from "./profileReducer";
import { surveyReducer } from "./surveyReducer";

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  profile: profileReducer,
  survey: surveyReducer,
});
