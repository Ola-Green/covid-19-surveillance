import React, { useState, useEffect } from "react";
import { EditProfile } from "./EditProfile";
import { TYPES } from "../../redux/actions/globalTypes";
import Button from "@material-ui/core/Button";
import { logout } from "../../redux/actions/authActions";
import Survey from "./survey";
import { Link } from "react-router-dom";

export const Info = ({ id, profile, auth, dispatch }) => {
  const [userData, setUserData] = useState([]);
  const [editProfile, setEditProfile] = useState(false);

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
    <>
      {userData.map((user) => (
        <div key={user._id}>
          <section className="py-5">
            <div className="container-lg">
              <div className="row min-vh-100 align-items-center align-content-center">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div className="p-image text-center ">
                    <img
                      src={user.avatar}
                      alt="profile img"
                      className="rounded-circle mw-100"
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-5 mt-md-0 order-md-first">
                  <div className="home-text">
                    <p className="text-muted mb-1">hello I am</p>
                    <h2 className="fs-4">
                      {user.firstName} {user.lastName}
                    </h2>
                    <h1 className="text-danger text-uppercase fs-1 fw-bold">
                      {user.occupation}
                    </h1>
                    <div className="row d-flex">
                      <div className="mt-3 px-2">
                        {user._id === auth.user._id && (
                          <Button
                            className="p-btn"
                            variant="contained"
                            color="primary"
                            onClick={() => setEditProfile(true)}
                          >
                            Edit Profile
                          </Button>
                        )}
                      </div>
                      <div className="mt-3 px-2">
                        {user._id === auth.user._id && (
                          <Button
                            className="p-btn"
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to="/"
                            onClick={() => dispatch(logout())}
                          >
                            Sign Out
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end first section */}

          <section className="bg-white py-3">
            <div className="container-lg py-4">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title text-center">
                    <h2 className="fw-bold mb-5">About Me</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h5>Phone Number</h5>
                </div>
                <div className="col-md-6 text-secondary">{user.mobile}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h5>Address</h5>
                </div>
                <div className="col-md-6 text-secondary">{user.address}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h5>Town</h5>
                </div>
                <div className="col-md-6 text-secondary">{user.town}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h5>Gender</h5>
                </div>
                <div className="col-md-6 text-secondary">{user.gender}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h5>Age</h5>
                </div>
                <div className="col-md-6 text-secondary">{user.age}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h5>Email</h5>
                </div>
                <div className="col-md-6 text-secondary">{user.email}</div>
              </div>
              <hr />
            </div>
          </section>

          {/* end of second section */}

          <section>
            <div className="container">
              <Survey
                auth={auth}
                id={id}
                dispatch={dispatch}
                profile={profile}
              />
            </div>
          </section>
          {editProfile && <EditProfile setEditProfile={setEditProfile} />}
        </div>
      ))}
    </>
  );
};
