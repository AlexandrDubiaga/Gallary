import { LOAD_FOTOS} from "../types";

const initiallState = {
  allFotos:[],
  loadings:true
};
export const fotosReducer = (state = initiallState, action) => {
  switch (action.type) {
    case LOAD_FOTOS: {
      return {
        ...state,
        allFotos: action.payload,
        loadings:false
      };
    }
    default:
      return state;
  }
};
