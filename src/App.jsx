import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const createInitialCounter = () => {
  const localCounter = localStorage.getItem('feedback')
  if (localCounter) {
    return JSON.parse(localCounter)
  }
  return 0
}

function App() {
  const [feedback, setFeedback] = useState(createInitialCounter);

 useEffect(() => {

    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback, 
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

   const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const interest = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <div>
        <Description />
        <Options updateFeedback={updateFeedback}  totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}/>
        {totalFeedback > 0 ? (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            totalFeedback={totalFeedback}
            interest={interest}
          /> 
        ) : (
          "No feedback yet. You are first!"
        )}
      </div>
    </>
  );
}

export default App;
