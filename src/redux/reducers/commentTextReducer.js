import {
  TEXT_COMMENT,
  TEXT_UPDATE,
  TEXT_DELETE,
  COMMENTS_LOAD
} from "../actions/actions";

const initialState = {
  comments: [],
  spinner: true
};

export const commentTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.data]
      };
    case TEXT_UPDATE:
      const { data } = action;
      const { comments } = state;
      const commentsIndex = comments.findIndex((item) => item.id === data.id);

      const nextComments = [
        ...comments.slice(0, commentsIndex),
        data,
        ...comments.slice(commentsIndex + 1)
      ];
      return {
        ...state,
        comments: nextComments
      };
    case TEXT_DELETE:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const commentsIndex = comments.findIndex((item) => item.id === id);

        const nextComments = [
          ...comments.slice(0, commentsIndex),
          ...comments.slice(commentsIndex + 1)
        ];
        return {
          ...state,
          comments: nextComments
        };
      })();
    case COMMENTS_LOAD:
      const commentsNew = action.data.map((item) => {
        return {
          text: item.name,
          id: item.id
        };
      });
      return {
        ...state,
        comments: commentsNew,
        spinner: false
      };

    default:
      return state;
  }
};
