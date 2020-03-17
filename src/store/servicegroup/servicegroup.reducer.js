import ServiceGroupActionTypes from "./servicegroup.types";

const servicegroup = (state = [], action) => {
    switch (action.type) {
      case ServiceGroupActionTypes.ADD_SERVICE_GROUP:

      var existeSubServico = false;
      state.map(srvgrp => {
        if(parseInt(srvgrp.srvin) === parseInt(action.srvin)){
            existeSubServico = true;
        }
      })
      if(existeSubServico){
        return state.map(srvgrp => {
          if(parseInt(srvgrp.srvin) === parseInt(action.srvin)){ 
            return { ...srvgrp, 
              mss: action.mss, 
              mediaid:action.mediaid,
              srvin: action.srvin,
              callcount: action.callcount,
              atdcount: action.atdcount,
              atdslacount: action.atdslacount,
              tmatd: action.tmatd,
              queuecount: action.queuecount,
              queueanscount: action.queueanscount,
              tmansqueue: action.tmansqueue,
              mte: action.mte,
              abncount: action.abncount,
              abnslacount: action.abnslacount,
              tmabn: action.tmabn,
              abncounttransfer: action.abncounttransfer,
              abnslacounttransfer: action.abnslacounttransfer,
              tmabntransfer: action.tmabntransfer,
              transfercount: action.transfercount,
              actcall: action.actcall,
              nextcallqueue: action.nextcallqueue,
              cdrnextcallqueue:action.cdrnextcallqueue,
              datemaxqueue:action.datemaxqueue
            }
          }
            return srvgrp
        })

      }else{
          return [
            {
              mss: action.mss,
              mediaid:action.mediaid,
              srvin: action.srvin,
              callcount: action.callcount,
              atdcount: action.atdcount,
              atdslacount: action.atdslacount,
              tmatd: action.tmatd,
              queuecount: action.queuecount,
              queueanscount: action.queueanscount,
              tmansqueue: action.tmansqueue,
              mte: action.mte,
              abncount: action.abncount,
              abnslacount: action.abnslacount,
              tmabn: action.tmabn,
              abncounttransfer: action.abncounttransfer,
              abnslacounttransfer: action.abnslacounttransfer,
              tmabntransfer: action.tmabntransfer,
              transfercount: action.transfercount,
              actcall: action.actcall,
              nextcallqueue: action.nextcallqueue,
              cdrnextcallqueue:action.cdrnextcallqueue,
              datemaxqueue:action.datemaxqueue
            },
            ...state
          ]
    }
      default:
        return state
    }
  }
  
  export default servicegroup