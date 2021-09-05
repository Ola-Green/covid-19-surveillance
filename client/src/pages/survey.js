import React, { useState } from "react";
import { createSurvey } from "../redux/actions/surveyActions";
import { useDispatch, useSelector } from "react-redux";

export default function SurveyPage() {
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
    <div className="container mt-2">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-3 content">
              <h2 className="m-2 pt-3 text-center">
                Please attempt the following questions
              </h2>
              <hr />
              <div className="card-body">
                <div className="row">
                  <div className="col-md-7">
                    <h5>Have you been having recurrent headache?</h5>
                  </div>

                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      checked={headache === "No"}
                      type="radio"
                      name="headache"
                      value="No"
                    />
                    <label htmlFor="No">No </label>

                    <input
                      type="radio"
                      checked={headache === "Yes"}
                      name="headache"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <label className="form-check-label " htmlFor="yes">
                      Yes
                    </label>
                  </div>
                </div>
                <hr />
                {/* end line */}
                <div className="row">
                  <div className="col-md-7">
                    <h5>Bad case of convulsion?</h5>
                  </div>

                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      checked={convulsion === "No"}
                      type="radio"
                      name="convulsion"
                      value="No"
                    />
                    <label htmlFor="No">No</label>

                    <input
                      type="radio"
                      checked={convulsion === "Yes"}
                      name="convulsion"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <label className="form-check-label " htmlFor="yes">
                      Yes
                    </label>
                  </div>
                </div>
                <hr />
                {/* end line */}
                <div className="row">
                  <div className="col-md-7">
                    <h5>Frequent rashes?</h5>
                  </div>

                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      checked={rash === "No"}
                      type="radio"
                      name="rash"
                      value="No"
                    />
                    <label htmlFor="No">No </label>

                    <input
                      type="radio"
                      checked={rash === "Yes"}
                      name="rash"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <label htmlFor="yes"> Yes</label>
                  </div>
                </div>
                <hr />
                {/* end line */}
                <div className="row">
                  <div className="col-md-7">
                    <h5>Have you been nauseous and vomitting of late?</h5>
                  </div>

                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      checked={nauseaVomit === "No"}
                      type="radio"
                      name="nauseaVomit"
                      value="No"
                    />
                    <label htmlFor="No">No </label>

                    <input
                      type="radio"
                      checked={nauseaVomit === "Yes"}
                      name="nauseaVomit"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <label className="form-check-label " htmlFor="yes">
                      Yes:
                    </label>
                  </div>
                </div>
                <hr />
                {/* end line */}

                <div className="row">
                  <div className="col-md-7">
                    <h5>Have you been having diarrhoea?</h5>
                  </div>

                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      checked={diarrhoea === "No"}
                      type="radio"
                      name="diarrhoea"
                      value="No"
                    />
                    <label htmlFor="No">No </label>

                    <input
                      type="radio"
                      checked={diarrhoea === "Yes"}
                      name="diarrhoea"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <label className="form-check-label " htmlFor="Yes">
                      Yes
                    </label>
                  </div>
                </div>
                <hr />
                {/* end line */}

                <div className="row">
                  <div className="col-md-7">
                    <h5>Have you been coughing a lot?</h5>
                  </div>

                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      checked={cough === "No"}
                      type="radio"
                      name="cough"
                      value="No"
                    />
                    <label htmlFor="No">No </label>

                    <input
                      type="radio"
                      checked={cough === "Yes"}
                      name="cough"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <label className="form-check-label " htmlFor="yes">
                      Yes
                    </label>
                  </div>
                </div>
                <hr />
                {/* end line */}
                <div className="row">
                  <div className="col-md-7">
                    <h5>
                      Have you been experiencing disorder in your consciousness?
                    </h5>
                  </div>

                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      checked={disorderConsciousness === "No"}
                      type="radio"
                      name="disorderConsciousness"
                      value="No"
                    />
                    <label htmlFor="No">No </label>

                    <input
                      type="radio"
                      checked={disorderConsciousness === "Yes"}
                      name="nauseaVomit"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <label className="form-check-label " htmlFor="Yes">
                      Yes:
                    </label>
                  </div>
                </div>
                <hr />
                {/* end line */}

                <div className="row">
                  <div className="col-md-7">
                    <h5>Have you been experiencing bleeding disorder?</h5>
                  </div>

                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      checked={bleedingDisorder === "No"}
                      type="radio"
                      name="bleedingDisorder"
                      value="No"
                    />
                    <label htmlFor="No">No </label>

                    <input
                      type="radio"
                      checked={bleedingDisorder === "Yes"}
                      name="bleedingDisorder"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <label className="form-check-label " htmlFor="yes">
                      Yes:
                    </label>
                  </div>
                </div>
                <hr />
                {/* end line */}
                <div className="row">
                  <div className="col-md-7">
                    <h5>Have you been having rampant fever?</h5>
                  </div>

                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      checked={fever === "No"}
                      type="radio"
                      name="fever"
                      value="No"
                    />
                    <label htmlFor="No">No </label>

                    <input
                      type="radio"
                      checked={fever === "Yes"}
                      name="fever"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <label className="form-check-label " htmlFor="yes">
                      Yes:
                    </label>
                  </div>
                </div>
                <hr />
                {/* end line */}

                <div className="row">
                  <div className="col-md-7">
                    <h5>Have you been having sore throat?</h5>
                  </div>

                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      checked={soreThroat === "No"}
                      type="radio"
                      name="soreThroat"
                      value="No"
                    />
                    <label htmlFor="No">No </label>

                    <input
                      type="radio"
                      checked={soreThroat === "Yes"}
                      name="soreThroat"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <label className="form-check-label " htmlFor="yes">
                      Yes
                    </label>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <input type="submit" className="btn-dark w-100" value="save" />
        </div>
      </form>
    </div>
  );
}
