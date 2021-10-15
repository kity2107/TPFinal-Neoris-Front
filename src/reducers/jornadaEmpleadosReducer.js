import { types } from "../types/types";

const initialState = {
  jornadas: [],
};

export const jornadaEmpleadosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.jornadaEmpleados:
      return {
        ...state,
        jornadas: action.payload,
      };
    default:
      return state;
  }
};
