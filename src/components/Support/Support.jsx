import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Support() {
  let [support, setSupport] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (e) => {
    e.preventDefault();
    console.log("Hi");

    dispatch({
      type: "SET_SUPPORT",
      payload: support,
    });

    history.push("/comments");
  };

  return (
    <>
      <h1>How well are you being supported?</h1>
      <form onSubmit={nextPage}>
        <label htmlFor="support">Support? </label>
        <input
          data-testid="input"
          id={"support"}
          type={"number"}
          value={support}
          onChange={(event) => setSupport(event.target.value)}
        />{" "}
        <button data-testid="next">Next</button>
      </form>
    </>
  );
}
