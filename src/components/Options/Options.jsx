import css from "./options.module.css"

const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
  return (
    <div className={css.boxBtn}>
          <button onClick={() => updateFeedback('good')} type="button" className={css.btn}>Good</button>
          <button onClick={() => updateFeedback('neutral')} type="button" className={css.btn}>Neutral</button>
          <button onClick={() => updateFeedback('bad')} type="button" className={css.btn}>Bad</button>
          {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={css.btn}>Reset</button>
          )}
         </div>
  );
};

export default Options;
