import React, { useEffect, useState } from "react";
import { formatTime } from "../../utils/formatTime";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { teal, blue } from "@material-ui/core/colors";

const ResultButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],

    padding: "10px 20px",
    border: "1px solid",
    lineHeight: 1.5,
    borderColor: "#0063cc",
    width: "40%",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    "&:hover": {
      backgroundColor: "transparent",
      color: "#0062cc",
      boxShadow: "none",
    },
  },
}))(Button);

const AgainButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],

    padding: "10px 20px",
    border: "1px solid",
    lineHeight: 1.5,
    borderColor: "#0063cc",
    width: "40%",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    "&:hover": {
      backgroundColor: "transparent",
      color: "#0062cc",
      boxShadow: "none",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function End({ results, data, onReset, onAnswersCheck, time }) {
  const classes = useStyles();
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });

    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card bg-white mt-5 py-5 px-5">
      <div className="container-lg py-4 ">
        <div className="card-body justify-content-center">
          <h2 className="card-title text-center px-5 mb-1">Your Results</h2>
          <hr />
          <div
            className="mt-3 border text-white text-center py-2"
            style={{ backgroundColor: "#333", opacity: "0.6" }}
          >
            {correctAnswers} of {data.length}
          </div>

          <div
            className="mt-3 border text-white text-center py-2"
            style={{ backgroundColor: "#333", opacity: "0.6" }}
          >
            <strong>
              Your score: {Math.floor((correctAnswers / data.length) * 100)}%
            </strong>
          </div>

          <div
            className="mt-3 border text-white text-center py-2"
            style={{ backgroundColor: "#333", opacity: "0.6" }}
          >
            <strong>Your time:</strong> {formatTime(time)}
          </div>
          {Math.floor((correctAnswers / data.length) * 100) < 50 ? (
            <div className="bg-danger mt-3 border text-white text-center py-3 px-5 rounded">
              We think you might be in trouble please visit the nearest covid-19
              testing center to get tested for covid-19
            </div>
          ) : (
            <div className="bg-success rounded mt-3 text-white text-center px-5 py-3">
              We believe you might be fine
            </div>
          )}
          <div className="row d-flex mt-3 justify-content-center">
            <ResultButton
              type="submit"
              onClick={onAnswersCheck}
              className={classes.margin}
            >
              Check Your Answers
            </ResultButton>

            <AgainButton onClick={onReset} className={classes.margin}>
              Try Again
            </AgainButton>
          </div>
        </div>
      </div>
    </div>
  );
}
