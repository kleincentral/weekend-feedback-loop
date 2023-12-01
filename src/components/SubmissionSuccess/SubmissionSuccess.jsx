import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SubmissionSuccess() {
  const history = useHistory();

  const restart = () => {
    history.push("/");
  };

  return (
    <div>
      <h3>Feedback!</h3>

      <h4>Thank you!</h4>
      <button data-testid="next" onClick={restart}>
        Leave New Feedback
      </button>
    </div>
  );
}
