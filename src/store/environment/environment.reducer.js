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
      default:
        return state;
    }
  }
  