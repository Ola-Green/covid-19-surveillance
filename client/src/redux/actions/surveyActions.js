import { TYPES } from "./globalTypes";
import { postDataApi } from "../../utils/fetchData";

export const SURVEY_TYPES = {
  MAKE_SURVEYS: "MAKE_SURVEYS",
  LOADING_SURVEYS: "LOADING_SURVEYS",
};
export const createSurvey = (data, auth) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.ALERT, payload: { loading: true } });

    const res = await postDataApi("makesurvey", data, auth.token);
    dispatch({
      type: SURVEY_TYPES.MAKE_SURVEYS,
      payload: { ...res.data.survey, user: auth.user },
    });

    dispatch({ type: TYPES.ALERT, payload: { success: res.data.msg } });
  } catch (err) {
    dispatch({
      type: TYPES.ALERT,
      payload: { error: err.response.data.msg },
    });
  }
};
