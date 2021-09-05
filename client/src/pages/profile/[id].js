import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Info } from "../../components/profile/Info";
import { getProfileUsers } from "../../redux/actions/profileActions";

import { fetchAllUsers } from "../../redux/actions/userActions";
import Survey from "../../components/profile/survey";

export default function Profile() {
  const { profile, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (profile.ids.every((item) => item !== id)) {
      dispatch(getProfileUsers({ id, auth }));
    }
  }, [id, auth, dispatch, profile.ids]);

  useEffect(() => {
    if (auth.isAdmin) dispatch(fetchAllUsers(auth.token));
  }, [auth.token, auth.isAdmin, dispatch]);
  return (
    <div className="profile">
      <Info dispatch={dispatch} auth={auth} profile={profile} id={id} />
      <div className="row">
        <Survey auth={auth} id={id} dispatch={dispatch} profile={profile} />
      </div>
    </div>
  );
}
