import { types } from "../types/types";

const initialState = {
  tipoJornada: [],
};

export const jornadaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.listJornada:
      return {
        ...state,
        tipoJornada: action.payload,
      };
    default:
      return state;
  }
};
