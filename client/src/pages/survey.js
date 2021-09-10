import React, { useEffect, useState } from "react";
import Consent from "../components/survey/consent";
import Questions from "../components/survey/questions";
import surveyData from "../components/survey/data/data.json";
import End from "../components/survey/end";
import SurveyModal from "../components/survey/surveyModal";

let interval;
export default function SurveyPage() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  const surveyStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="survey">
      {step === 1 && <Consent onSurveyStart={surveyStartHandler} />}
      {step === 2 && (
        <Questions
          data={surveyData.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={surveyData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={surveyData.data}
          onReset={resetClickHandler}
          onAnswersCheck={() => setShowModal(true)}
          time={time}
        />
      )}

      {showModal && (
        <SurveyModal
          onClose={() => setShowModal(false)}
          results={answers}
          data={surveyData.data}
        />
      )}
    </div>
  );
}
