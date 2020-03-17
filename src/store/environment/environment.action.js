import EnvironmentActionTypes from "./environment.types";

export const create_info_environment = (language,sip_primary) => ({ type: EnvironmentActionTypes.ADD_INFO_ENVIRONMENT, language,sip_primary })
export const changeLanguage          = (language)             => ({ type: EnvironmentActionTypes.CHANGE_LANGUAGE, language })
