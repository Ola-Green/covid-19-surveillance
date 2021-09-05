export const valid = ({
  firstName,
  lastName,
  gender,
  occupation,
  address,
  town,
  age,
  mobile,

  email,
  password,
  confirmPassword,
}) => {
  const err = {};
  if (!firstName) {
    err.firstName = "Please Enter Your First Name";
  } else if (firstName.length > 25) {
    err.firstName = "First Name can only be 25 characters long";
  }

  if (!mobile) err.mobile = "Please enter a phone number";
  if (!occupation) err.occupation = "Please enter your occupation";
  if (!address) err.address = "Please enter your address";
  if (!gender) err.gender = "Please select your gender";
  if (!town) err.town = "Please enter your town";
  if (!age) err.age = "Please enter your age";

  if (!lastName) {
    err.lastName = "Please enter your last name";
  } else if (lastName.replace(/ /g, "").length > 25) {
    err.lastName = "last name can only be 25 characters long.";
  }

  if (!email) {
    err.email = "Please enter email address";
  } else if (!validateEmail(email)) {
    err.email = "Email format is invalid";
  }
  if (!password) {
    err.password = "Please enter your password";
  } else if (password.length < 6) {
    err.password = "Password must be at least 6 chars long";
  }

  if (!confirmPassword) {
    err.confirmPassword = "Password confirmation field must not be empty";
  } else if (password !== confirmPassword) {
    err.confirmPassword = "confirm password must match password";
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};

function validateEmail(email) {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
}
