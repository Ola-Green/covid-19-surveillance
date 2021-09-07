import React, { useState, useEffect } from "react";
import SurveyTable from "../surveyTable";

export default function Survey({ auth, id, dispatch, profile }) {
  const [surveys, setSurveys] = useState([]);
  const [result, setResult] = useState(9);

  useEffect(() => {
    profile.surveys.forEach((data) => {
      if (data._id === id) {
        setSurveys(data.surveys);
        setResult(data.result);
      }
    });
  }, [profile.surveys, id]);

  return <SurveyTable surveys={surveys} result={result} />;
}
