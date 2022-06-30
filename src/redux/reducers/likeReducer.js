import { INCRIMENT, DECREMENT } from "../actions/actions"

const initialState = {
   likes: 0
}

export const likeReducer = (state = initialState, action) => {

   switch (action.type) {
      case INCRIMENT:
         return {
            ...state,
            likes: state.likes + 1
         }
      case DECREMENT:
         if (state.likes > 0) {
            return {
               ...state,
               likes: state.likes - 1
            }
         } else {
            return {
               ...state,
               likes: 0
            }
         }
      default:
         return state
   }
}