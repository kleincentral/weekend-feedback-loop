import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function Feeling() {
  let [feeling, setFeeling] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (e) => {
    e.preventDefault();
    console.log("Hi");

    dispatch({
      type: "SET_FEELING",
      payload: feeling,
    });

    history.push("/understanding");
  };

  return (
    <>
      <h1>How are you feeling today?</h1>
      <form onSubmit={nextPage}>
        <label htmlFor="feeling">Feeling? </label>
        <input
          data-testid="input"
          id={"feeling"}
          type={"number"}
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)}
        />{" "}
        <button data-testid="next">Next</button>
      </form>
    </>
  );
}
