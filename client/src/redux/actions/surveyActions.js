import { TYPES } from "./globalTypes";
import { postDataApi } from "../../utils/fetchData";

export const createSurvey = (data, auth) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await postDataApi("makesurvey", data, auth.token);

    dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });
  } catch (err) {
    dispatch({
      type: TYPES.ALERT,
      payload: { error: err.response.data.msg },
    });
  }
};
