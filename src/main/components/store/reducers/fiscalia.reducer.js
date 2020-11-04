import * as actions from "../actions";

const initiaValue = {
  fiscalias: null,
  unicaFiscalia: null,
};

function fiscaliasReducer(state = initiaValue, action) {
  switch (action.type) {
    case actions.GET_FISCALIAS:
      return {
        ...state,
        fiscalias: action.payload,
      };
    case actions.GET_FISCALIA:
      return {
        ...state,
        unicaFiscalia: action.payload,
      };
    case actions.CLEAR_ALL: {
      return {
        fiscalias: [],
        unicaFiscalia: [],
      };
    }
    default:
      return state;
  }
}

export default fiscaliasReducer;
