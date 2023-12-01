import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Comments() {
  let [comments, setComments] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (e) => {
    e.preventDefault();
    console.log("Hi");

    dispatch({
      type: "SET_COMMENTS",
      payload: comments,
    });

    history.push("/review");
  };

  return (
    <>
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={nextPage}>
        <label htmlFor="comments">Comments </label>
        <input
          data-testid="input"
          id={"comments"}
          type={"text"}
          value={comments}
          onChange={(event) => setComments(event.target.value)}
        />{" "}
        <button data-testid="next">Next</button>
      </form>
    </>
  );
}
