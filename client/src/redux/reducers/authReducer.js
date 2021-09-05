import { TYPES } from "../actions/globalTypes";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.AUTH:
      return action.payload;

    default:
      return state;
  }
};
