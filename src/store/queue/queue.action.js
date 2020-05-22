import {api} from '../../services/api';
import QueueActionTypes from "./queue.types";

export const get_info_queue = (iduser) => {
    return (dispatch) => {
        return api.get(`/queue?userid=${iduser}`)
        .then(response => {
            dispatch(create_info_queue(response.data))
        })
        .catch(error => {
            console.log(error)
        });
    };
}

export const InsertAnswerACK = (idcdr,telefone,userid, servicein, descricao) => {
    if(servicein != 0){
      return api.get(`/insertserviceattendant?idcdr=${idcdr}&iduser=${userid}&telefone=${telefone}&serviceinid=${servicein}&descricao=${descricao}`)
        .then(response => {
          return response.data.id
      })
    }else{
      return api.get(`/insertserviceattendant?idcdr=${idcdr}&iduser=${userid}&telefone=${telefone}&descricao=${descricao}`)
        .then(response => {
          return response.data.id
      })
    }
  }

export const create_info_queue = (queue) => ({ type: QueueActionTypes.ADD_INFO_QUEUE, queue })
export const addListCallQueue = (tipo, callqueueid, serviceinid, chamado, chamador, datahora,contrech, status, mediaid, cdrid, scriptid, callback_count, customerwait, contactname, pathfile) => ({ type: QueueActionTypes.ADD_QUEUE, callqueueid, serviceinid, chamado, chamador, datahora,  contrech, status, mediaid, cdrid , scriptid, callback_count, customerwait, contactname, pathfile})
export const deleteListCallQueue = (callqueueid) => ({ type: QueueActionTypes.DELETE_QUEUE,	callqueueid})
export const editListCallQueue = (tipo, callqueueid, serviceinid, chamado, chamador, datahora, contrech, status, mediaid, cdrid, customerwait, respcliente, respatendente, pathfile, anyreturn) => ({ type: QueueActionTypes.EDIT_QUEUE, callqueueid, serviceinid, chamado, chamador, datahora,  contrech, status, mediaid, cdrid,  customerwait, respcliente, respatendente, pathfile, anyreturn})
export const returnListCallQueue = (tipo, callqueueid, status, callback_count, username) => ({ type: QueueActionTypes.RETURN_QUEUE, callqueueid, status, callback_count, username})
export const returnListCallQueueObs = (tipo, callqueueid, status, anyreturn) => ({ type: QueueActionTypes.RETURN_QUEUEOBS, callqueueid, status, anyreturn})
