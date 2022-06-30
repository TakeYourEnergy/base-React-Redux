import { useState, useEffect } from "react";

const SingleComment = ({ data }) => {
  const [textComment, setTextComment] = useState("");

  useEffect(() => {
    if (data.text) {
      setTextComment(data.text);
    }
  }, [data.text]);

  const inputSingleComment = (e) => {
    setTextComment(e.target.value);
  };

  return (
    <form className="comments-item">
      <div className="comments-item-delete">&times;</div>
      <input type="text" value={textComment} onChange={inputSingleComment} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
