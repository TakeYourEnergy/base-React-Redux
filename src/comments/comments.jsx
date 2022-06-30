import SingleComment from "../singleComment/singleComment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { TEXT_COMMENT } from "../redux/actions/actions";

const Comments = () => {
  const comments = useSelector((state) => state.commentTextReducer.comments);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch({ type: TEXT_COMMENT, data: { text, id } });
    e.target.reset();
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmitForm} className="comments-item-create">
        <input
          type="text"
          onChange={handleChangeText}
          placeholder="Введите коммент"
        />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((item) => {
          return <SingleComment key={item.id} data={item} />;
        })}
    </div>
  );
};

export default Comments;
