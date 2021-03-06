export const INCRIMENT = "INCRIMENT";
export const DECREMENT = "DECREMENT";

export const INPUT_TEXT = "INPUT_TEXT";

export const TEXT_COMMENT = "TEXT_COMMENT";

export const TEXT_UPDATE = "TEXT_UPDATE";

export const TEXT_DELETE = "TEXT_DELETE";

export const COMMENTS_LOAD = "COMMENTS_LOAD";

export function commentLoad() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then((res) => res.json())
      .then((item) => {
        dispatch({ type: COMMENTS_LOAD, data: item });
      });
  };
}
