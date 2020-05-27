import ClienteDetailsActionTypes from "./clientdetails.types";
import { api } from "../../services/api";
import { statusFile } from '../uploadfile/uploadfile.action';
import { SendFile } from '../../services/imsdn';
import Moment from 'moment'

const { meses } = require("../../utils/data")

export const create_info_client = (queue) => {
  return (dispatch) => {
      dispatch(create_info_client_action(queue))
      dispatch(lastcontactclient(queue.caller))
      dispatch(lastcontactsclient(queue.cdrid,queue.caller))
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

  export const dbfileSize = (size) => {
  
    if(size != undefined){
      let decimals = 2;
      if(size == 0) return '0 Bytes';
      var k = 1024,
        dm = decimals <= 0 ? 0 : decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(size) / Math.log(k));
      return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    
  }

  export const insert_upload = (data,makeid,caption,size) => {
    return (dispatch, getState) => {
      const {userReducer,clientdetailsReducer} = getState();
       api.post(`/files`, data, {
        onUploadProgress: ProgressEvent => {
          let loaded = ProgressEvent.loaded / ProgressEvent.total*100;
          dispatch(statusFile(loaded))
        },
      })
      .then(res => {
        var file = res.data.file
        SendFile(userReducer, clientdetailsReducer, file.path, caption, makeid);
        let data = Moment().format('DD/MM/YYYY HH:mm');
        let hora = Moment().format('HH:mm');
        let tamanho = dbfileSize(size);
        // console.log(makeid," ~¿"+caption+"~¿"+file.path+"~¿"+tamanho, "Me", time, clientdetailsReducer.cdrid, '1', 'visto', false, dia)
        dispatch(add_messages_queue(makeid,size,file.path,true,clientdetailsReducer.caller,clientdetailsReducer.cdrid, data, hora, clientdetailsReducer.mediaid, 'Me', 3,caption))
      })
    };
  }

export const create_info_client_action = (todos) => ({ type: ClienteDetailsActionTypes.ADD_INFO_CLIENT, todos })
export const create_info_last_contacts = (todos) => ({ type: ClienteDetailsActionTypes.ADD_LAST_CONTACTS, todos })
export const create_info_last_contact  = (todos) => ({ type: ClienteDetailsActionTypes.ADD_LAST_CONTACT, todos })
export const create_messages_queue     = (todos) => ({ type: ClienteDetailsActionTypes.CREATE_MESSAGES, todos })
export const anwsers_accept            = (todos) => ({ type: ClienteDetailsActionTypes.ACCEPT_ANWSER, todos })
export const add_messages_queue        = (makeid,filesize,messagem,agente,telefone,cdrid,data,hora,mediaid,username,mimetypeid,caption) => ({ type: ClienteDetailsActionTypes.ADD_MESSAGES, makeid,filesize,messagem,agente,telefone,cdrid,data,hora,mediaid,username,mimetypeid,caption })
