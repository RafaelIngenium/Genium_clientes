import ReconnectingWebSocket from "reconnecting-websocket";
import { connection_platform } from "./api";
import { insertInfoServiceGroup } from "../store/servicegroup/servicegroup.action"
import Moment from 'moment'

const iplocal = connection_platform.ip_intern;
const portims = connection_platform.port_socket_intern;

var port = connection_platform.port_backend_intern;
var ipcurrent = "";
var gethostname = window.location.hostname;
var pathname = gethostname === "localhost" ? iplocal : gethostname;
var socket = "";
var perfilUser = '';
var acessoFila = '';
var stringGrupoFila = '';
var stringSubMonitoria = '';
var ramaluser = '';
var qtde_fila = "";

export const sendIPSocket = (imsdnpri, imsdnsec) => {
  let urls = [];

  urls.push(connection_platform.type_socket + "://" + imsdnpri + ":" + portims);
  if (imsdnsec !== null) {
    urls.push(
      connection_platform.type_socket + "://" + imsdnsec + ":" + portims
    );
  }

  let urlIndex = 0;
  const urlProvider = () => urls[urlIndex++ % urls.length];
  socket = new ReconnectingWebSocket(urlProvider, [], {
    constructor: WebSocket,
    connectionTimeout: 1000, // in milliseconds
    reconnectInterval: 1000
  });
  ipcurrent = iplocal;
  return { urls, urlIndex, urlProvider, ipcurrent, socket };
};

export const RegisterReqWebSocket = (dispatch, user, strSubMonit,strGrp) => {
  RegisterReqSocket(user, strSubMonit,strGrp);
}

function RegisterReqSocket (user,strSubMonit,strGrp){
  ramaluser = user.ramal;			
  let post = Moment().format('DD/MM/YYYY HH:mm:ss');
  let tmlogin;
  acessoFila = user.acessofila === true ? 1:0;
  perfilUser = user.permitsupervisor===true ? 7:1;
  stringGrupoFila = strGrp;
  stringSubMonitoria = strSubMonit;
  qtde_fila = user.qtdequeue;
  tmlogin = user.tmlogin!=null?user.tmlogin:0

  socket.send("REGISTER\r\n"+user.id+"\r\nTYPE\r\n"+perfilUser+"\r\nCPARK\r\n"+acessoFila+"\r\nGRP\r\n"+stringGrupoFila+"&\r\nSUBSRV\r\n"+stringSubMonitoria+"&\r\nMOD\r\n0\r\nRECONN\r\n0\r\n\r\n");
  socket.send("REQ\r\n"+user.id+"\r\nUSERNAME\r\n"+user.username+"\r\nDISPLAYNAME\r\n"+user.displayname+"\r\nEXTEN\r\n"+user.ramal+"\r\nREASON\r\n \r\nSTATUS\r\nLV\r\nSTATUSID\r\n-1\r\nHOUR\r\n"+post+"'-00:00:00'\r\nDESCRIPTION\r\n \r\nEMAIL\r\n \r\nGROUP\r\n"+user.idgroup+"\r\nDTL\r\n"+post+"\r\nGROUPNAME\r\n"+user.grupo+"\r\nINSLA\r\n100\r\nOUTSLA\r\n100\r\nTMLOGIN\r\n"+parseInt(tmlogin)+"\r\nINITIALLOGIN\r\n1\r\n\r\n");
  socket.send("REQAGENTSTATUS\r\n"+user.userid+"\r\n\r\n");
  
  if(user.permitsupervisor)
    socket.send("MSS_GETINFO\r\n"+user.id+"\r\SRVIN\r\n-1\r\n\r\n");

};

const setupSocket = (
  getState,
  dispatch,
  userinfo,
) => {
  socket.onopen = event => {
    socket.onmessage = event => {
      
      // const {} = getState();

      let datareceived = "Received: " + event.data;
      const novadata = datareceived.split("\r\n");
      switch (novadata[0]) {
        case "Received: USRMSGLOG":
          break;
        case "Received: GRPMSGLOG":
          break;
        case "Received: GRPMSGLOGACK":
          break;
        case "Received: USRTYPING":
          break;
        case "Received: USRMSGLOGACK":
          break;
        case "Received: USRMSGLOGREAD":
          break;
        case "Received: INFO":
          break;
        case "Received: ANSWEBCHAT":
          break;
        case "Received: WSIMSGLOGREAD":
          break;
        case "Received: RETURNBOTACK":
          break;
        case "Received: WSIBYE":
          break;
        case "Received: CHATTRANSFERCMPLT":
          break;
        case "Received: CALLQUEUE":
          let PROFILEPHOTO    = novadata.indexOf("PROFILEPHOTO");
          let REASON		      = novadata.indexOf("REASON");
          console.log(novadata)
          if(qtde_fila>0){
            //console.log("filaPermissao",filaPermissao)
            // if(filaPermissao){
            //   //console.log("PSSOU")
            //   filaPermissao.map(queue =>{
            //     //console.log(parseInt(queue.serviceinid),parseInt(novadata[23]))
            //     if(parseInt(queue.serviceinid)===parseInt(novadata[23])){
            //         //if(novadata[7]=='ADD' && novadata[17]=='1'){
            //           if(novadata[7]=='ADD'){
            //           customerwait = queue.customer_wait;
            //           var contactname = novadata[25].split("¿");
            //           contactname = contactname[0];
            //           //dispatch(addListCallQueue(novadata[7],novadata[3],parseInt(novadata[23]),novadata[11],novadata[9],novadata[19],novadata[15],novadata[17],parseInt(novadata[21]),parseInt(novadata[5]),parseInt(novadata[1]), 0, customerwait, contactname, novadata[PROFILEPHOTO+1]))
            //           //console.log("addListCallQueue")
            //         }
            //     }
            //   })	 
            // }
              
            if((novadata[7]=='NANS' && novadata[17]=='0')||(novadata[7]=='ADD' && novadata[17]=='0')){
              //dispatch(editListCallQueue(novadata[7],novadata[3],parseInt(novadata[23]),novadata[11],novadata[9],novadata[19],novadata[15],novadata[17],parseInt(novadata[21]), parseInt(novadata[5]), parseInt(novadata[25]), customerwait, 0, novadata[PROFILEPHOTO+1], novadata[REASON+1]))
              console.log("editListCallQueue")
            }else if(novadata[7]=='CBACK' && novadata[23]==''){
              //console.log("returnListCallQueue")
              //dispatch(returnListCallQueue(novadata[7],novadata[3],'2', parseInt(novadata[19]),novadata[17],novadata[PROFILEPHOTO+1]))
            }else if(novadata[7]=='NANS' && novadata[15]=='0'){
             // dispatch(returnListCallQueueObs(novadata[7],novadata[3],'0',novadata[REASON+1]))
            }else if(novadata[7]=='RM'){
              //console.log("deleteListCallQueue")
              //dispatch(deleteListCallQueue(novadata[3],novadata[17]))
            }
            
          }
          break;
        case "Received: SUP_ACT":
          break;
        case "Received: SHUTDOWN":
          break;
        case "Received: WSITYPING":
          break;
        case "Received: MSS":
          let MSS		              = novadata.indexOf("MSS");
          let SRVIN		            = novadata.indexOf("SRVIN");
          let MEDIA	              = novadata.indexOf("MEDIA");
          let CALLCOUNT		        = novadata.indexOf("CALLCOUNT");
          let ATDCOUNT		        = novadata.indexOf("ATDCOUNT");
          let ATDSLACOUNT		      = novadata.indexOf("ATDSLACOUNT");
          let TMATD		            = novadata.indexOf("TMATD");
          let QUEUECOUNT		      = novadata.indexOf("QUEUECOUNT");
          let QUEUEANSCOUNT		    = novadata.indexOf("QUEUEANSCOUNT");
          let TMANSQUEUE		      = novadata.indexOf("TMANSQUEUE");
          let MTE		              = novadata.indexOf("MTE");
          let ABNCOUNT		        = novadata.indexOf("ABNCOUNT");
          let ABNSLACOUNT		      = novadata.indexOf("ABNSLACOUNT");
          let TMABN		            = novadata.indexOf("TMABN");
          let ABNCOUNTTRANSFER	  = novadata.indexOf("ABNCOUNTTRANSFER");
          let ABNSLACOUNTTRANSFER	= novadata.indexOf("ABNSLACOUNTTRANSFER");
          let TMABNTRANSFER		    = novadata.indexOf("TMABNTRANSFER");
          let TRANSFERCOUNT		    = novadata.indexOf("TRANSFERCOUNT");
          let ACTCALL		          = novadata.indexOf("ACTCALL");
          let NEXTCALLQUEUE		    = novadata.indexOf("NEXTCALLQUEUE");
          let CDRNEXTCALLQUEUE		= novadata.indexOf("CDRNEXTCALLQUEUE");
        
          
          let timefim = "";
          // valorDiferenca = parseInt(Math.abs(Math.round(ipcurrent.difftime)));
          // if(parseInt(novadata[39])>0){
          //   let timeIni = Moment().format('YYYY/MM/DD HH:mm:ss');
          //   timeIni = Moment(timeIni).subtract(valorDiferenca,'seconds').format('YYYY/MM/DD HH:mm:ss');
          //   timefim = Moment(timeIni).subtract(parseInt(novadata[39]), 'seconds').format('DD/MM/YYYY HH:mm:ss')
          // }
          dispatch(insertInfoServiceGroup(novadata[MSS+1],novadata[SRVIN+1],novadata[MEDIA+1],novadata[CALLCOUNT+1],novadata[ATDCOUNT+1],novadata[ATDSLACOUNT+1],novadata[TMATD+1],novadata[QUEUECOUNT+1],novadata[QUEUEANSCOUNT+1],novadata[TMANSQUEUE+1],novadata[MTE+1],novadata[ABNCOUNT+1],novadata[ABNSLACOUNT+1],novadata[TMABN+1],novadata[ABNCOUNTTRANSFER+1],novadata[ABNSLACOUNTTRANSFER+1],novadata[TMABNTRANSFER+1],novadata[TRANSFERCOUNT+1],novadata[ACTCALL+1],novadata[NEXTCALLQUEUE+1],novadata[CDRNEXTCALLQUEUE+1],timefim));
          break;
        default:
          break;
      }
    };

    socket.onclose = function(evt) {
      // start();
    };

    socket.onerror = function(evt) {
      console.log("Error!");
    };

    return socket;
  };
};
export default setupSocket;
