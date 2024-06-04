import css from "./feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, interest }) => {
  return (
    <div className={css.boxFeedback}>
      <div className={css.boxFeedbackRate}>
        <p className={css.feedbackRate}>Good: {good}</p>
        <p className={css.feedbackRate}>Neutral: {neutral}</p>
        <p className={css.feedbackRate}>Bad: {bad}</p>
      </div>
      <div className={css.feedbackTotal}>
        <p className={css.feedback}>Total: {totalFeedback}</p>
        <p className={css.feedback}>Positive: {interest}%</p>
      </div>
    </div>
  );
};

export default Feedback;
