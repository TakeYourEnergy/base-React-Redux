import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TEXT_UPDATE, TEXT_DELETE } from "../redux/actions/actions";

const SingleComment = ({ data }) => {
  const [textComment, setTextComment] = useState("");

  //const state = useSelector((state) => console.log(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.text) {
      setTextComment(data.text);
    }
  }, [data.text]);

  const { id } = data;

  const inputSingleComment = (e) => {
    setTextComment(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: TEXT_UPDATE, data: { textComment, id } });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch({ type: TEXT_DELETE, id });
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={textComment} onChange={inputSingleComment} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
