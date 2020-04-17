import Moment from 'moment'
import ClienteDetailsActionTypes from "./clientdetails.types";

export default function clientdetails(state = [], action) {
    switch (action.type) {
      case ClienteDetailsActionTypes.ADD_INFO_CLIENT:
        var todos = action.todos
            todos = {...todos, lastcontacts: [], lastcontact: "", messages: []}
        return todos
      case ClienteDetailsActionTypes.ADD_LAST_CONTACT:
        return {...state, lastcontact: action.todos}
      case ClienteDetailsActionTypes.ADD_LAST_CONTACTS:
        return {...state, lastcontacts: action.todos}
      case ClienteDetailsActionTypes.CREATE_MESSAGES:
        return {...state, messages: action.todos}
      case ClienteDetailsActionTypes.ADD_MESSAGES:
        var array = state.messages
        array.push({agente: true,
                            anoenvio: "",
                            caption: null,
                            cliente: "",
                            data_hora_envio: Moment().format('DD/MM/YYYY HH:mm'),
                            diaenvio: "",
                            favorite: false,
                            filesize: null,
                            horaenvio: Moment().format('HH:mm'),
                            id: '',
                            idmidia: '',
                            mesenvio: "",
                            messagem: action.todos,
                            midia: "WhatsApp",
                            mimetypeid: 1,
                            mon_type_id: 0,
                            thumbnail: null,
                            username: "IMS-9300"})
        return {...state, messages: array}
      default:
        return state;
    }
  }
  