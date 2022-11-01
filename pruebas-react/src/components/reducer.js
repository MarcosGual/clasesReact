import { TYPES } from "./actions";

export const initialState = {
  contador: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case TYPES.incrementar:
      return { contador: state.contador + 1 };
    case TYPES.decrementar:
      return { contador: state.contador - 1 };
    case TYPES.incrementarDos:
      return { contador: state.contador + action.payload };
    case TYPES.decrementarDos:
      return { contador: state.contador - action.payload };
    default:
      return state;
  }
}
