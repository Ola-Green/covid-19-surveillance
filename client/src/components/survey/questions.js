import React, { useEffect, useRef, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { teal } from "@material-ui/core/colors";
import { createSurvey } from "../../redux/actions/surveyActions";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    justifyContent: "center",

    padding: "15px 20px",
    border: "1px solid",
    lineHeight: 1.5,
    borderColor: "#0063cc",
    width: "80%",
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

export default function Questions({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) {
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("selected");
    const initValue = JSON.parse(saved);
    return initValue || "";
  });
  const [error, setError] = useState("");
  const radiosWrapper = useRef();
  const classes = useStyles();

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSurvey(selected, auth));
  };
  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("please select an option");
    }

    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);

    setSelected("");

    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [selected]);

  return (
    <div className="card bg-white mt-5 py-5 px-5">
      <div className="container-lg py-4">
        <form onSubmit={handleSubmit}>
          <div className="card-body justify-content-center">
            <h2 className="card-title text-center mb-5">{data.question}</h2>
            <div className="mt-3" ref={radiosWrapper}>
              {data.choices.map((choice, i) => (
                <label className="radio  border bg-white" key={i}>
                  <input
                    type="radio"
                    name="answer"
                    value={choice}
                    onChange={changeHandler}
                  />
                  {choice}
                </label>
              ))}
            </div>
            {error && (
              <div className="text-danger text-center text-uppercase text-bold">
                {error}
              </div>
            )}
            <div className="row justify-content-center">
              <ColorButton
                variant="contained"
                color="primary"
                className={classes.margin}
                onClick={nextClickHandler}
              >
                Next
              </ColorButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
