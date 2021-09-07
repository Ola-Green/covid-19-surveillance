import React from "react";
import { Link } from "react-router-dom";
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

export default function Consent() {
  const classes = useStyles();
  return (
    <section className="bg-white mt-3 mb-3 py-5">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <p className="lead h6 py-2">
                In order to prevent and control infectiuos disease outbreaks
                effectively, the most critical step is the timely detection of
                epidemic premonition,which depends on effective disease
                surveillance systems.The sooner public health officials know
                about an outbreak the more decisively they can intervene to stem
                its spread.
              </p>
              <p className="lead h6 py-2">
                Please be informed that the variables considered in the survey
                you are about to take are determined after literature
                review,experts consultation,online panel discussion and data
                collected from field investigation.
              </p>
              <p className="lead h6 py-2">
                The ten major symptoms determined are fever, cough,
                headache,sore throat, nausea or
                vomitting,diarrhoea,rash,mucocutaneous haemorrhage,convulsion
                and disturbance of consciousness.
              </p>
              <p className="lead h6 py-2">
                Should you manifest more than three of these symptoms at a time,
                we strongly suggest that you visit the nearest covid-19 health
                care center around you to ascertain your covid-19 status.
              </p>
              <ColorButton
                variant="contained"
                color="primary"
                className={classes.margin}
                component={Link}
                to="/survey"
              >
                Continue
              </ColorButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
