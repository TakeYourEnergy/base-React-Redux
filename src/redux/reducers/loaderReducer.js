import { LOADER_DISPALY_ON, LOADER_DISPALY_OFF } from "../actions/actions";

const initialState = {
  status: false
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_DISPALY_ON:
      return {
        ...state,
        status: true
      };
    case LOADER_DISPALY_OFF:
      return {
        ...state,
        status: false
      };
    default:
      return state;
  }
};
