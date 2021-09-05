import { SURVEY_TYPES } from "../actions/surveyActions";

const initState = {
  surveys: [],
};

export const surveyReducer = (state = initState, action) => {
  switch (action.type) {
    case SURVEY_TYPES.MAKE_SURVEYS:
      return {
        ...state,
        surveys: [action.payload, ...state.surveys],
      };
    case SURVEY_TYPES.LOADING_SURVEYS:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
