import { TYPES } from "../actions/globalTypes";

const users = [];
export const usersReducer = (state = users, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_USERS:
      return action.payload;
    default:
      return state;
  }
};
