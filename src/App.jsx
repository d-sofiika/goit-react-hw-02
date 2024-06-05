import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";



function App() {

  const objData = {
  good: 0,
  neutral: 0,
  bad: 0
};
const createInitialCounter = () => {
  const localCounter = localStorage.getItem('feedback')
  if (localCounter) {
    return JSON.parse(localCounter)
  }
  return objData
  }
  
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
    setFeedback(objData);
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
          <Notification/>
        )}
      </div>
    </>
  );
}

export default App;
