import { TYPES } from "./globalTypes";
import { getDataApi, patchDataApi } from "../../utils/fetchData";
import { imageUpload } from "../../utils/imageUpload";

export const PROFILE_TYPES = {
  LOADING: "LOADING",
  GET_USER: "GET_USER",
  GET_ID: "GET_ID",
  GET_SURVEYS: "GET_SURVEYS",
};

export const getProfileUsers =
  ({ id, auth }) =>
  async (dispatch) => {
    dispatch({ type: PROFILE_TYPES.GET_ID, payload: id });

    try {
      dispatch({ type: PROFILE_TYPES.LOADING, payload: true });

      const res = await getDataApi(`user/${id}`, auth.token);
      const res1 = await getDataApi(`user_survey/${id}`, auth.token);

      dispatch({
        type: PROFILE_TYPES.GET_USER,
        payload: res.data,
      });
      dispatch({
        type: PROFILE_TYPES.GET_SURVEYS,
        payload: { ...res1.data, _id: id },
      });

      dispatch({ type: PROFILE_TYPES.LOADING, payload: false });
    } catch (err) {
      dispatch({
        type: TYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

export const updateProfileUser =
  ({ inputs, avatar, auth }) =>
  async (dispatch) => {
    if (inputs.firstName.length > 25)
      dispatch({
        type: TYPES.ALERT,
        payload: { error: "Fullname length exceeded" },
      });

    if (inputs.address.length > 200)
      dispatch({
        type: TYPES.ALERT,
        payload: { error: "address length can't exceed 200 characters" },
      });

    try {
      let media;
      dispatch({ type: TYPES.ALERT, payload: { loading: true } });
      if (avatar) media = await imageUpload([avatar]);
      const res = await patchDataApi(
        "updateuser",
        {
          ...inputs,
          avatar: avatar ? media[0].url : auth.user.avatar,
        },
        auth.token
      );

      dispatch({
        type: TYPES.AUTH,
        payload: {
          ...auth,
          user: {
            ...auth.user,
            ...inputs,
            avatar: avatar ? media[0].url : auth.user.avatar,
          },
        },
      });

      dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });
    } catch (err) {
      dispatch({
        type: TYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };
