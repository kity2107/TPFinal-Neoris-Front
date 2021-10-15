import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { jornadaReducer } from "./jornadaReducer";
import { jornadaEmpleadosReducer } from "./jornadaEmpleadosReducer";

export const appReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  jornada: jornadaReducer,
  jornadas: jornadaEmpleadosReducer,
});
