import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Review() {
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comments = useSelector((store) => store.comments);

  const dispatch = useDispatch();
  const history = useHistory();

  const submitSupport = () => {
    console.log("Attempting to submit!");
    axios({
      method: "POST",
      url: "/feedback",
      data: {
        feeling: feeling,
        understanding: understanding,
        support: support,
        comments: comments,
      },
    });
    dispatch({
      type: "CLEAR_INPUTS",
    });
    history.push("/submissionSuccess");
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>
      <p>Feelings: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
      <button data-testid="next" onClick={submitSupport}>
        Submit
      </button>
    </div>
  );
}
