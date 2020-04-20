import ClienteDetailsActionTypes from "./clientdetails.types";
import { api } from "../../services/api";

export const create_info_client = (queue) => {
  return (dispatch) => {
      dispatch(create_info_client_action(queue))
      dispatch(lastcontactclient(queue.caller))
      dispatch(lastcontactsclient(queue.cdrid,queue.caller))
      console.log("QUEUEUEUE", queue.status)
      if(queue.status !== '1')
        dispatch(carregarmessagescallback(queue.queueid))
      else
        dispatch(carregarmessages(queue.cdrid))
  };
}

export const lastcontactclient = (number) => {
  return (dispatch) => {
      return api.get(`/lastcontactclient?number=${number}`)
      .then(response => {
          dispatch(create_info_last_contact(response.data[0].to_char))
      })
      .catch(error => {
          console.log(error)
      });
  };
}

export const lastcontactsclient = (cdr,number) => {
  return (dispatch) => {
      return api.get(`/lastcontactsclient?cdr=${cdr}&number=${number}`)
      .then(response => {
          dispatch(create_info_last_contacts(response.data))
      })
      .catch(error => {
          console.log(error)
      });
  };
}

export const carregarmessages = (cdr) => {
    return (dispatch) => {
        return api.get(`/loadingmessages?cdr=${cdr}`)
        .then(response => {
            dispatch(create_messages_queue(response.data))
        })
        .catch(error => {
            console.log(error)
        });
    };
  }

  export const carregarmessagescallback = (cdr) => {
    return (dispatch) => {
        return api.get(`/loadingmessagescallback?cdr=${cdr}`)
        .then(response => {
            dispatch(create_messages_queue(response.data))
        })
        .catch(error => {
            console.log(error)
        });
    };
  }


export const create_info_client_action = (todos) => ({ type: ClienteDetailsActionTypes.ADD_INFO_CLIENT, todos })
export const create_info_last_contacts = (todos) => ({ type: ClienteDetailsActionTypes.ADD_LAST_CONTACTS, todos })
export const create_info_last_contact  = (todos) => ({ type: ClienteDetailsActionTypes.ADD_LAST_CONTACT, todos })
export const create_messages_queue     = (todos) => ({ type: ClienteDetailsActionTypes.CREATE_MESSAGES, todos })
export const add_messages_queue        = (todos) => ({ type: ClienteDetailsActionTypes.ADD_MESSAGES, todos })
