import { TYPES } from "./globalTypes";
import { deleteDataApi, getDataApi, patchDataApi } from "../../utils/fetchData";

export const fetchAllUsers = (token) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await getDataApi("getusers", token);

    dispatch({ type: TYPES.GET_ALL_USERS, payload: res.data });

    dispatch({ type: TYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: TYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};

export const updateUser =
  ({ num, editUser, checkAdmin, auth }) =>
  async (dispatch) => {
    try {
      if (num % 2 !== 0) {
        const res = await patchDataApi(
          `update_role/${editUser._id}`,
          {
            role: checkAdmin ? 1 : 0,
          },
          auth.token
        );

        dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });
      }
    } catch (err) {
      dispatch({
        type: TYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

export const deleteUser =
  ({ id, auth }) =>
  async (dispatch) => {
    try {
      dispatch({ type: TYPES.ALERT, payload: { loading: true } });

      await deleteDataApi(`delete/${id}`, auth.token);

      dispatch({ type: TYPES.ALERT, payload: { loading: false } });
    } catch (err) {
      dispatch({
        type: TYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };
