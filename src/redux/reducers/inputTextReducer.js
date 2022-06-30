import { INPUT_TEXT } from "../actions/actions";

const initialState = {
   text: ''
}

const inputTextReducer = (state = initialState, action) => {
   switch (action.type) {
      case INPUT_TEXT:
         return {
            ...state,
            text: action.data
         }
      default:
         return state
   }
}

export default inputTextReducer