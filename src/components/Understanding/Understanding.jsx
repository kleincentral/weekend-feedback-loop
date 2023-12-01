import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Understanding() {
  let [understanding, setUnderstanding] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (e) => {
    e.preventDefault();
    console.log("Hi");

    dispatch({
      type: "SET_UNDERSTANDING",
      payload: understanding,
    });

    history.push("/support");
  };

  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <form onSubmit={nextPage}>
        <label htmlFor="understanding">Understanding? </label>
        <input
          data-testid="input"
          id={"understanding"}
          type={"number"}
          value={understanding}
          onChange={(event) => setUnderstanding(event.target.value)}
        />{" "}
        <button data-testid="next">Next</button>
      </form>
    </>
  );
}
