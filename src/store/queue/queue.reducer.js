import QueueActionTypes from "./queue.types";
import Moment from 'moment'

export default function user(state = [], action) {
    switch (action.type) {
      case QueueActionTypes.ADD_INFO_QUEUE:
        return action.queue.map(queue => {
              return queue
        })
        // return action.queue;
        case QueueActionTypes.ADD_QUEUE:
                  var existeQueue = false;
                  state.map(queue => {
                    if(parseInt(queue.queueid) === parseInt(action.callqueueid))
                      existeQueue = true;
                    })
                  
                  if(!existeQueue){
                      return [
                        {
                          queueid: action.callqueueid,
                          caller: action.chamador,
                          called: action.chamado, 
                          to_char: action.datahora,
                          recv_count: action.contrech,
                          status: action.status, 
                          mediaid: action.mediaid, 
                          cdrid: action.cdrid, 
                          scriptid: action.scriptid,
                          callback_count: action.callback_count,
                          customerwait: action.customerwait,
                          contactname: action.contactname,
                          serviceinid: action.serviceinid,
                          pathfile: action.pathfile
                        }, 
                        ...state,
                      ]
                  }            

        case QueueActionTypes.EDIT_QUEUE:
                return state.map(queue => {
                  if(parseInt(queue.queueid) === parseInt(action.callqueueid)){ 
                    return { ...queue, 
                      queueid: action.callqueueid,
                      caller: action.chamador,
                      called: action.chamado, 
                      to_char: action.datahora,
                      recv_count: action.contrech, 
                      status: action.status, 
                      mediaid: action.mediaid,
                      cdrid: action.cdrid,
                      customerwait: action.customerwait,
                      serviceinid: action.serviceinid,
                      anyreturn: action.anyreturn,
                      pathfile: action.pathfile  
                    }
                  }
                    return queue
                })
        case QueueActionTypes.RETURN_QUEUE:
                return state.map(queue => {
                  if(parseInt(queue.queueid) === parseInt(action.callqueueid)){ 
                    return { ...queue, 
                      status: action.status,
                      callback_count: action.callback_count,
                      username: action.username
                    }
                  }
                    return queue
                })

        case QueueActionTypes.RETURN_QUEUEOBS:
                return state.map(queue => {
                  if(parseInt(queue.queueid) === parseInt(action.callqueueid)){ 
                    return { ...queue, 
                      status: action.status,
                      obs: queue.obs +Moment().format('DD/MM/YYYY HH:mm:ss')+'-'+ action.anyreturn
                    }
                  }
                    return queue
        })    

        case QueueActionTypes.REFRESH_QUEUE_STATUS:
          return state.map(queue => {
            console.log("=====================CHEGOU NO REDUCE DO LISTQUEUE================");
            if(parseInt(queue.cdrnew) === parseInt(action.cdrid)){ 
              return { ...queue, 
                status: '0'
              }
            }
              return queue
        }) 

        case QueueActionTypes.REFRESH_QUEUE_ID:
            return state.map(queue => {
              if(parseInt(queue.queueid) === parseInt(action.queueid)){
                return { ...queue, cdrnew: action.cdrnew}
              }
                return queue
          }) 


        case QueueActionTypes.DELETE_QUEUE:
              
              return state.filter(todo =>
                parseInt(todo.queueid) !== parseInt(action.callqueueid)
              )
        case QueueActionTypes.EDIT_CALLBACK:
          if(state){
            return state.map(cback => {
              if(parseInt(action.caller) === parseInt(cback.caller)){ 
                return { ...cback, respclient: action.respclient }
              }
              return cback
            })
          }

          case QueueActionTypes.RESP_ATD:
          if(state){
            return state.map(cback => {
              if(parseInt(action.caller) === parseInt(cback.caller)){ 
                return { ...cback, respatendente: action.respatendente }
              }
              return cback
            })
          }
          case QueueActionTypes.CLEAR_RETURN:
            if(state){
              return state.map(cback => {
                if(parseInt(action.caller) === parseInt(cback.caller)){ 
                  return { ...cback, status: action.status }
                }
                return cback
              })
            }
            case QueueActionTypes.REFRESH_NO_ANSWER:
              return state.map(queue => {
                if(parseInt(queue.queueid) === parseInt(action.queueid)){ 
                  return { ...queue, 
                    status: '0'
                  }
                }
                  return queue
              }) 
            default:
              return state
            }
  }
  