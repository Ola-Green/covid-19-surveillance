import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
import { register } from "../redux/actions/authActions";

const genders = [
  { id: 1, value: "male" },
  { id: 2, value: "female" },
  { id: 3, value: "trans" },
  { id: 4, value: "nonbinary" },
  { id: 5, value: "others" },
];
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "80%",
    margin: theme.spacing(1, 0),
  },

  divide: {
    width: "50%",
    display: "flex",
    alignSelf: "center",
  },
}));

export default function Register() {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    age: "",
    town: "",
    occupation: "",
    gender: "male",
    mobile: "",
    confirmPassword: "",
    showPassword: false,
    showConfirm: false,
  });

  const {
    firstName,
    lastName,
    email,
    password,
    address,
    age,
    town,
    occupation,
    gender,
    mobile,
    confirmPassword,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(values));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handlePass = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleConfirm = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickConfirm = () => {
    setValues({ ...values, showConfirm: !values.showConfirm });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownConfirm = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (auth.token) history.push("/");
  }, [auth.token, history]);

  return (
    <div style={{ marginTop: "50px" }}>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            margin: "auto",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <h3>Register an Account</h3>
        </div>
        <Divider className={classes.divide} />

        <TextField
          id="standard-required"
          label={alert.firstName ?? "First Name"}
          variant="standard"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          className={classes.textField}
          style={{ background: `${alert.firstName ? "#fd2d6a14" : ""} ` }}
        />
        <TextField
          id="standard-required"
          name="lastName"
          label={alert.lastName ?? "Last Name"}
          variant="standard"
          value={lastName}
          onChange={handleChange}
          className={classes.textField}
          style={{ background: `${alert.lastName ? "#fd2d6a14" : ""} ` }}
        />
        <TextField
          id="standard-required"
          label={alert.occupation ?? "occupation"}
          variant="standard"
          name="occupation"
          value={occupation}
          onChange={handleChange}
          className={classes.textField}
          style={{ background: `${alert.occupation ? "#fd2d6a14" : ""} ` }}
        />

        <TextField
          id="standard-required"
          name="email"
          label={alert.email ?? "Email"}
          variant="standard"
          value={email}
          onChange={handleChange}
          className={classes.textField}
          style={{ background: `${alert.email ? "#fd2d6a14" : ""} ` }}
        />

        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            {alert.password ?? "Password"}
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={password}
            onChange={handlePass("password")}
            style={{ background: `${alert.password ? "#fd2d6a14" : ""} ` }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            {alert.confirmPassword ?? "Confirm Password"}
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirm("confirmPassword")}
            style={{
              background: `${alert.confirmPassword ? "#fd2d6a14" : ""} `,
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickConfirm}
                  onMouseDown={handleMouseDownConfirm}
                >
                  {values.showConfirm ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <TextField
          label={alert.address ?? "Address"}
          name="address"
          value={address}
          onChange={handleChange}
          variant="standard"
          id="standard-required"
          className={classes.textField}
          style={{ background: `${alert.address ? "#fd2d6a14" : ""} ` }}
        />
        <TextField
          label={alert.mobile ?? "Phone Number"}
          name="mobile"
          value={mobile}
          onChange={handleChange}
          variant="standard"
          id="standard-required"
          className={classes.textField}
          style={{ background: `${alert.mobile ? "#fd2d6a14" : ""} ` }}
        />

        <TextField
          select
          label={alert.gender ?? "Gender"}
          name="gender"
          value={gender}
          onChange={handleChange}
          helperText="Please select your gender"
          className={classes.textField}
          style={{ background: `${alert.gender ? "#fd2d6a14" : ""} ` }}
        >
          {genders.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label={alert.age ?? "Age"}
          name="age"
          value={age}
          onChange={handleChange}
          style={{ background: `${alert.age ? "#fd2d6a14" : ""} ` }}
          className={classes.textField}
        />
        <TextField
          label={alert.town ?? "Town"}
          name="town"
          value={town}
          onChange={handleChange}
          style={{ background: `${alert.town ? "#fd2d6a14" : ""} ` }}
          className={classes.textField}
        />
        <input className="btn-submit" type="submit" value="Register" />
      </form>
    </div>
  );
}
