import { types } from "../types/types";

const initialState = {};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.regJornada:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
