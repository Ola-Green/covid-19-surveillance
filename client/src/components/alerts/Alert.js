import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toast } from "./Toast";
import { Loading } from "./Loading";
import { TYPES } from "../../redux/actions/globalTypes";

export const Alert = () => {
  const { alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {alert.loading && <Loading />}
      {alert.error && (
        <Toast
          handleShow={() => dispatch({ type: TYPES.ALERT, payload: {} })}
          msg={{ title: "Error!", body: alert.error }}
          bgColor="bg-danger"
        />
      )}

      {alert.success && (
        <Toast
          handleShow={() => dispatch({ type: TYPES.ALERT, payload: {} })}
          msg={{ title: "success", body: alert.success }}
          bgColor="bg-success"
        />
      )}
    </div>
  );
};
