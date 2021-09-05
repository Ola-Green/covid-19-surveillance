import React, { useState, useEffect } from "react";
import { EditProfile } from "./EditProfile";
import { TYPES } from "../../redux/actions/globalTypes";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { logout } from "../../redux/actions/authActions";
import Survey from "./survey";

const useStyles = makeStyles((theme) => ({
  button: theme.spacing(2),
}));

export const Info = ({ id, profile, auth, dispatch }) => {
  const [userData, setUserData] = useState([]);
  const [editProfile, setEditProfile] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (id === auth.user._id) {
      setUserData([auth.user]);
    } else {
      const newData = profile.users.filter((user) => user._id === id);
      setUserData(newData);
    }
  }, [id, auth, dispatch, profile.users]);

  useEffect(() => {
    if (editProfile) {
      dispatch({ type: TYPES.MODAL, payload: true });
    } else {
      dispatch({ type: TYPES.MODAL, payload: false });
    }
  }, [editProfile, dispatch]);
  return (
    <div className="container-fluid">
      {userData.map((user) => (
        <div className="row">
          <div className="col-md-4 mt-1">
            <div className="card text-center sidebar">
              <div className="card-body">
                <img
                  src={user.avatar}
                  alt="profile"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h3>
                    {user.firstName} {user.lastName}
                  </h3>
                  <div className="mt-3">
                    {user._id === auth.user._id && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setEditProfile(true)}
                      >
                        Edit Profile
                      </Button>
                    )}
                  </div>
                  <div className="mt-3">
                    <Button
                      className={classes.button}
                      color="secondary"
                      variant="contained"
                      onClick={() => dispatch(logout())}
                    >
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8 mt-1">
            <div className="card mb-3 content">
              <h1 className="m-3 pt-3">About</h1>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Full Name</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {user.firstName} {user.lastName}
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-md-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-md-9 text-secondary">{user.email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Address</h5>
                  </div>
                  <div className="col-md-9 text-secondary">{user.address}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Occupation</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {user.occupation}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Gender</h5>
                  </div>
                  <div className="col-md-9 text-secondary">{user.gender}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Phone Number</h5>
                  </div>
                  <div className="col-md-9 text-secondary">{user.mobile}</div>
                </div>
                <hr />
              </div>
            </div>
            <div className="card mb-3 content">
              <h1 className="m-3">Covid Status</h1>
              <div className="card-body"></div>
            </div>
          </div>
          {editProfile && <EditProfile setEditProfile={setEditProfile} />}
          <div className="row"></div>
        </div>
      ))}
    </div>
  );
};
