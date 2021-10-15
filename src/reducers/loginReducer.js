import { types } from "../types/types";

const initialState = {};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginSignIn:
      return { ...state, ...action.payload };
    case types.loginLogout:
      return {};
    default:
      return state;
  }
};
