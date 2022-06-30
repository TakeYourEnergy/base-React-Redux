import { TEXT_COMMENT } from "../actions/actions";

const initialState = {
  comments: []
};

export const commentTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_COMMENT:
      return {
        comments: [...state.comments, action.data]
      };
    default:
      return state;
  }
};
