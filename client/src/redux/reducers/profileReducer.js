import { PROFILE_TYPES } from "../actions/profileActions";

const initState = {
  loading: false,
  users: [],
  ids: [],
  surveys: [],
};

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PROFILE_TYPES.GET_USER:
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };

    case PROFILE_TYPES.GET_ID:
      return {
        ...state,
        ids: [...state.ids, action.payload],
      };

    case PROFILE_TYPES.GET_SURVEYS:
      return {
        ...state,
        surveys: [...state.surveys, action.payload],
      };

    default:
      return state;
  }
};
