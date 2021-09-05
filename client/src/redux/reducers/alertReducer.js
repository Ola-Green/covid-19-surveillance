import { TYPES } from "../actions/globalTypes";

export const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.ALERT:
      return action.payload;

    default:
      return state;
  }
};
