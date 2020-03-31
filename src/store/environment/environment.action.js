import EnvironmentActionTypes from "./environment.types";
import { api } from "../../services/api";

export const get_info_diff_time = (currenttime) => {
  return (dispatch) => {
      return api.get(`/currenttime?data=${currenttime}`)
      .then(response => {
          dispatch(create_info_diff_time(response.data))
      })
      .catch(error => {
          console.log(error)
      });
  };
}

export const create_info_environment = (language,sip_primary) => ({ type: EnvironmentActionTypes.ADD_INFO_ENVIRONMENT, language,sip_primary })
export const changeLanguage          = (language)             => ({ type: EnvironmentActionTypes.CHANGE_LANGUAGE, language })
export const create_info_diff_time   = (diff_time)            => ({ type: EnvironmentActionTypes.INFO_TIME, diff_time })
export const changeScreenHeader          = (screen)             => ({ type: EnvironmentActionTypes.CHANGE_SCREEN_HEADER, screen })
