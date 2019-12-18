export default function environment(state = { language: localStorage.getItem('language_genium') === null ? 'pt-BR': localStorage.getItem('language_genium') }, action) {
    switch (action.type) {
      case 'ADD_INFO_ENVIRONMENT':
        return {
          language: action.language,
          sip_primary: action.sip_primary
        }
      default:
        return state;
    }
  }
  