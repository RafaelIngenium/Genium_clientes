import EnvironmentActionTypes from "./environment.types";

export default function environment(state = { language: localStorage.getItem('language_genium') === null ? 'pt-BR': localStorage.getItem('language_genium') }, action) {
    switch (action.type) {
      case EnvironmentActionTypes.ADD_INFO_ENVIRONMENT:
        return {
          language: action.language,
          sip_primary: action.sip_primary
        }
      case EnvironmentActionTypes.CHANGE_LANGUAGE:
        return {
          ...state,
          language: action.language
        }
      case EnvironmentActionTypes.INFO_TIME:
        return {
          ...state,
          diff_time: action.diff_time.data
        }
      case EnvironmentActionTypes.CHANGE_SCREEN_HEADER:
        return {
          ...state,
          class_constructor: action.screen
        }
      default:
        return state;
    }
  }
  