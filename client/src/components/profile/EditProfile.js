import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkImage } from "../../utils/imageUpload";
import { TYPES } from "../../redux/actions/globalTypes";
import { updateProfileUser } from "../../redux/actions/profileActions";

export const EditProfile = ({ setEditProfile }) => {
  const initState = {
    firstName: "",
    mobile: "",
    occupation: "",
    address: "",
    age: "",
    gender: "",
    lastName: "",
    town: "",
  };

  const [inputs, setInputs] = useState(initState);
  const [avatar, setAvatar] = useState("");
  const { auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    firstName,
    mobile,
    occupation,
    address,
    age,
    lastName,
    gender,
    town,
  } = inputs;

  const changeAvatar = (e) => {
    const file = e.target.files[0];
    const err = checkImage(file);
    if (err) return dispatch({ type: TYPES.ALERT, payload: { error: err } });
    setAvatar(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(updateProfileUser({ inputs, avatar, auth }));
  };

  useEffect(() => {
    setInputs(auth.user);
  }, [auth.user]);
  return (
    <div className="edit_profile">
      <button
        className="btn btn-danger btn_close"
        onClick={() => setEditProfile(false)}
      >
        Close
      </button>

      <form onSubmit={submit}>
        <div className="info_avatar">
          <img
            src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
            alt="profile_image"
            style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          />
          <span>
            <i className="fas fa-camera" />
            <p>change</p>
            <input
              type="file"
              name="file"
              id="file_up"
              accept="image/*"
              onChange={changeAvatar}
            />
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <div className="position-relative">
            <input
              className="form-control"
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
            <small
              className="text-danger position-absolute"
              style={{
                top: "50%",
                right: "5px",
                transform: "translateY(-50%)",
              }}
            >
              {firstName.length} / 25
            </small>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <div className="position-relative">
            <input
              className="form-control"
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
            <small
              className="text-danger position-absolute"
              style={{
                top: "50%",
                right: "5px",
                transform: "translateY(-50%)",
              }}
            >
              {lastName.length} / 25
            </small>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Phone Number</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            id="mobile"
            value={mobile}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            id="age"
            value={age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="town">Town</label>
          <input
            type="text"
            className="form-control"
            name="town"
            value={town}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            className="form-control"
            name="occupation"
            value={occupation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>

          <textarea
            name="address"
            id="address"
            cols="30"
            rows="4"
            className="form-control"
            value={address}
            onChange={handleChange}
          />
          <small className="d-block text-danger text-right">
            {address.length} / 200
          </small>
        </div>

        <label htmlFor="gender">Gender</label>
        <div className="input-group-prepend px-0 mb-4">
          <select
            name="gender"
            id="gender"
            value={gender}
            className="custom-select text-capitalize"
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Transgender</option>
            <option value="other">Others</option>
          </select>
        </div>
        <button className="btn btn-info w-100" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
