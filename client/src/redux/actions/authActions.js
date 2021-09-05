import { postDataApi } from "../../utils/fetchData";
import { TYPES } from "./globalTypes";
import { valid } from "../../utils/valid";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await postDataApi("login", data);

    dispatch({
      type: TYPES.AUTH,
      payload: {
        token: res.data.access_token,
        user: res.data.user,
        isAdmin: res.data.user.role === 1 ? true : false,
      },
    });

    localStorage.setItem("firstLogin", true);

    dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });
  } catch (err) {
    dispatch({ type: TYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};

export const refreshToken = () => async (dispatch) => {
  const firstLogin = localStorage.getItem("firstLogin");
  if (firstLogin) {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    try {
      const res = await postDataApi("refresh_token");
      dispatch({
        type: TYPES.AUTH,
        payload: {
          token: res.data.access_token,
          user: res.data.user,
          isAdmin: res.data.user.role === 1 ? true : false,
        },
      });

      dispatch({ type: TYPES.ALERT, payload: { loading: false } });
    } catch (err) {
      dispatch({
        type: TYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  }
};

export const register = (data) => async (dispatch) => {
  const check = valid(data);
  if (check.errLength > 0)
    return dispatch({ type: TYPES.ALERT, payload: check.errMsg });

  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await postDataApi("register", data);

    dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });
  } catch (err) {
    dispatch({ type: TYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("firstLogin");
    await postDataApi("logout");
    window.location.href = "/";
  } catch (err) {
    dispatch({ type: TYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await postDataApi("forget", email);

    dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });
  } catch (err) {
    dispatch({ type: TYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};

export const resetPassword = (data, token) => async (dispatch) => {
  const check = valid(data);
  if (check.errLength > 0) {
    dispatch({ type: TYPES.ALERT, payload: check.errMsg });
  }

  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await postDataApi("reset", data, token);

    dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });
  } catch (err) {
    dispatch({ type: TYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};
