import React, { useState } from "react";
import { createSurvey } from "../redux/actions/surveyActions";
import { useDispatch, useSelector } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],

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

export default function SurveyPage() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [values, setValues] = useState({
    headache: "",
    rash: "",
    convulsion: "",
    cough: "",
    nauseaVomit: "",
    diarrhoea: "",
    disorderConsciousness: "",
    bleedingDisorder: "",
    soreThroat: "",
    fever: "",
  });

  const {
    headache,
    convulsion,
    cough,
    nauseaVomit,
    diarrhoea,
    disorderConsciousness,
    rash,
    bleedingDisorder,
    soreThroat,
    fever,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSurvey(values, auth));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5 mb-5">
        <div className="container-lg bg-white py-5 ">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-5">
                <h2 className="fw-bold text-info ">
                  Please attempt all questions
                </h2>
                <hr />
              </div>
            </div>
          </div>

          <div className="row justify-content-center px-5">
            <div className="col-md-8">
              <h5>Have you been having recurrent headache?</h5>
            </div>
            <div className="col-md-4">
              <label htmlFor="radio_1" className="radio">
                <input
                  onChange={handleChange}
                  checked={headache === "No"}
                  type="radio"
                  id="radio_1"
                  name="headache"
                  value="No"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                No
              </label>

              <label htmlFor="radio_2" className="radio">
                <input
                  onChange={handleChange}
                  checked={headache === "Yes"}
                  type="radio"
                  id="radio_2"
                  name="headache"
                  value="Yes"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                Yes
              </label>
            </div>
          </div>
          <hr />
          {/* end of line */}

          <div className="row justify-content-center px-5">
            <div className="col-md-8">
              <h5>Have you been experiencing strange case of convulsion?</h5>
            </div>
            <div className="col-md-4">
              <label htmlFor="radio_3" className="radio">
                <input
                  onChange={handleChange}
                  checked={convulsion === "No"}
                  type="radio"
                  id="radio_3"
                  name="convulsion"
                  value="No"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                No
              </label>

              <label htmlFor="radio_4" className="radio">
                <input
                  onChange={handleChange}
                  checked={convulsion === "Yes"}
                  type="radio"
                  id="radio_4"
                  name="convulsion"
                  value="Yes"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                Yes
              </label>
            </div>
          </div>
          <hr />
          {/* end of line */}

          <div className="row justify-content-center px-5">
            <div className="col-md-8">
              <h5>Have you been having rashes?</h5>
            </div>
            <div className="col-md-4">
              <label htmlFor="radio_5" className="radio">
                <input
                  onChange={handleChange}
                  checked={rash === "No"}
                  type="radio"
                  id="radio_5"
                  name="rash"
                  value="No"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                No
              </label>

              <label htmlFor="radio_6" className="radio">
                <input
                  onChange={handleChange}
                  checked={rash === "Yes"}
                  type="radio"
                  id="radio_6"
                  name="rash"
                  value="Yes"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                Yes
              </label>
            </div>
          </div>
          <hr />

          {/* end of line */}
          <div className="row justify-content-center px-5">
            <div className="col-md-8">
              <h5>Have you been nauseous and vomitting of late?</h5>
            </div>
            <div className="col-md-4">
              <label htmlFor="radio_7" className="radio">
                <input
                  onChange={handleChange}
                  checked={nauseaVomit === "No"}
                  type="radio"
                  id="radio_7"
                  name="nauseaVomit"
                  value="No"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                No
              </label>

              <label htmlFor="radio_8" className="radio">
                <input
                  onChange={handleChange}
                  checked={nauseaVomit === "Yes"}
                  type="radio"
                  id="radio_8"
                  name="nauseaVomit"
                  value="Yes"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                Yes
              </label>
            </div>
          </div>
          <hr />
          {/* end of line */}

          <div className="row justify-content-center px-5">
            <div className="col-md-8">
              <h5>Have you been having diarrhoea?</h5>
            </div>
            <div className="col-md-4">
              <label htmlFor="radio_9" className="radio">
                <input
                  onChange={handleChange}
                  checked={diarrhoea === "No"}
                  type="radio"
                  id="radio_9"
                  name="diarrhoea"
                  value="No"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                No
              </label>

              <label htmlFor="radio_10" className="radio">
                <input
                  onChange={handleChange}
                  checked={diarrhoea === "Yes"}
                  type="radio"
                  id="radio_10"
                  name="diarrhoea"
                  value="Yes"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                Yes
              </label>
            </div>
          </div>
          <hr />
          {/* end of line */}

          <div className="row justify-content-center px-5">
            <div className="col-md-8">
              <h5>Have you been coughing a lot?</h5>
            </div>
            <div className="col-md-4">
              <label htmlFor="radio_11" className="radio">
                <input
                  onChange={handleChange}
                  checked={cough === "No"}
                  type="radio"
                  id="radio_11"
                  name="cough"
                  value="No"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                No
              </label>

              <label htmlFor="radio_12" className="radio">
                <input
                  onChange={handleChange}
                  checked={cough === "Yes"}
                  type="radio"
                  id="radio_12"
                  name="cough"
                  value="Yes"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                Yes
              </label>
            </div>
          </div>
          <hr />

          {/* end of line */}

          <div className="row justify-content-center px-5">
            <div className="col-md-8">
              <h5>Have you been having bleeding disorder?</h5>
            </div>
            <div className="col-md-4">
              <label htmlFor="radio_13" className="radio">
                <input
                  onChange={handleChange}
                  checked={bleedingDisorder === "No"}
                  type="radio"
                  id="radio_13"
                  name="bleedingDisorder"
                  value="No"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                No
              </label>

              <label htmlFor="radio_14" className="radio">
                <input
                  onChange={handleChange}
                  checked={bleedingDisorder === "Yes"}
                  type="radio"
                  id="radio_14"
                  name="bleedingDisorder"
                  value="Yes"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                Yes
              </label>
            </div>
          </div>
          <hr />
          {/* end of line */}

          <div className="row justify-content-center px-5">
            <div className="col-md-8">
              <h5>
                Have you been experiencing disorderd state of consiousness?
              </h5>
            </div>
            <div className="col-md-4">
              <label htmlFor="radio_15" className="radio">
                <input
                  onChange={handleChange}
                  checked={disorderConsciousness === "No"}
                  type="radio"
                  id="radio_15"
                  name="disorderConsciousness"
                  value="No"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                No
              </label>

              <label htmlFor="radio_16" className="radio">
                <input
                  onChange={handleChange}
                  checked={disorderConsciousness === "Yes"}
                  type="radio"
                  id="radio_16"
                  name="disorderConsciousness"
                  value="Yes"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                Yes
              </label>
            </div>
          </div>
          <hr />

          {/* end of line */}

          <div className="row justify-content-center px-5">
            <div className="col-md-8">
              <h5>Have you been feeling feverish?</h5>
            </div>
            <div className="col-md-4">
              <label htmlFor="radio_17" className="radio">
                <input
                  onChange={handleChange}
                  checked={fever === "No"}
                  type="radio"
                  id="radio_17"
                  name="fever"
                  value="No"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                No
              </label>

              <label htmlFor="radio_18" className="radio">
                <input
                  onChange={handleChange}
                  checked={fever === "Yes"}
                  type="radio"
                  id="radio_18"
                  name="fever"
                  value="Yes"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                Yes
              </label>
            </div>
          </div>
          <hr />

          {/* end of line */}

          <div className="row justify-content-center px-5">
            <div className="col-md-8">
              <h5>Have you been having sore throat?</h5>
            </div>
            <div className="col-md-4">
              <label htmlFor="radio_19" className="radio">
                <input
                  onChange={handleChange}
                  checked={soreThroat === "No"}
                  type="radio"
                  id="radio_19"
                  name="soreThroat"
                  value="No"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                No
              </label>

              <label htmlFor="radio_20" className="radio">
                <input
                  onChange={handleChange}
                  checked={soreThroat === "Yes"}
                  type="radio"
                  id="radio_20"
                  name="soreThroat"
                  value="Yes"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                Yes
              </label>
            </div>
          </div>
          <hr />
          {/* end of line */}
          <div className="row justify-content-center px-5">
            <ColorButton
              variant="contained"
              type="submit"
              color="primary"
              className={classes.margin}
            >
              Submit
            </ColorButton>
          </div>
        </div>
      </form>
    </>
  );
}
