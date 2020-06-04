import ReconnectingWebSocket from "reconnecting-websocket";
import { connection_platform } from "./api";
import { insertInfoServiceGroup } from "../store/servicegroup/servicegroup.action"
import { addListCallQueue,editListCallQueue,returnListCallQueue,returnListCallQueueObs,deleteListCallQueue,InsertAnswerACK } from "../store/queue/queue.action"
import { refresh_agent } from "../store/agent/agent.action"
import { anwsers_accept,add_messages_queue,changeStatusQueue } from "../store/clientdetails/clientdetails.action"
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
var customerwait = 0

function makeid(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

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

export const InviteMessages = (infousers, contactid, msg) => {
  InviteMessage(infousers, contactid, msg, makeid);
  return true;
}

function InviteMessage (infousers,contactid,msg){
  msg = msg.replace(/\n|\r\n/gi, "¿");
  msg = escape(msg)
  msg = msg.replace(/%u/gi, "\\u");
  msg = unescape(msg)
  // console.log(msg)
  // console.log("WSIMSGLOG\r\n"+infousers.id+"\r\nTYPE\r\n0\r\nTOUSER\r\n1\r\nTOCLIENT\r\n"+contactid.cdrid+"\r\nCALLID\r\n"+makeid(32)+"\r\nUSERNAME\r\n"+infousers.displayname+"\r\nMSG\r\n"+msg+"\r\n\r\n");
  if(contactid.answer == true)
    socket.send("WSIMSGLOG\r\n"+infousers.id+"\r\nTYPE\r\n0\r\nTOUSER\r\n1\r\nTOCLIENT\r\n"+contactid.cdrid+"\r\nCALLID\r\n"+makeid(32)+"\r\nUSERNAME\r\n"+infousers.displayname+"\r\nMSG\r\n"+msg+"\r\n\r\n");
  else
    socket.send("WSIMSGLOG\r\n"+infousers.id+"\r\nTYPE\r\n0\r\nTOUSER\r\n1\r\nTOCLIENT\r\n"+contactid.cdrid+"\r\nCALLID\r\n"+makeid(32)+"\r\nUSERNAME\r\n"+infousers.displayname+"\r\nMSG\r\n"+msg+"\r\nMONUSER\r\n"+infousers.id+"\r\nTMON\r\n3\r\n\r\n");
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

export const RequestCallParkSocket = (infousers,scriptid,cdrid,mediaid) => {
  RequestCallPark(infousers,scriptid,cdrid,mediaid);
}

function RequestCallPark (infouser, scriptid, cdrid, mediaid){
  // console.log(infouser, scriptid, cdrid, mediaid)
  // console.log("CALLPARK\r\n"+infouser.id+"\r\nSCRIPT\r\n"+scriptid+"\r\nCDRID\r\n"+cdrid+"\r\nMEDIA\r\n"+mediaid+"\r\nUSERNAME\r\n"+infouser.username+"\r\nDISPLAYNAME\r\n"+infouser.displayname+"\r\nEXTEN\r\n"+infouser.ramal+"\r\n\r\n")
  socket.send("CALLPARK\r\n"+infouser.id+"\r\nSCRIPT\r\n"+scriptid+"\r\nCDRID\r\n"+cdrid+"\r\nMEDIA\r\n"+mediaid+"\r\nUSERNAME\r\n"+infouser.username+"\r\nDISPLAYNAME\r\n"+infouser.displayname+"\r\nEXTEN\r\n"+infouser.ramal+"\r\n\r\n");
};

export const SendFile = (contactid, infousers, msg, caption, makeid) => {
  UrlFileSend(contactid, infousers, msg, caption, makeid);
}

function UrlFileSend (reducerUser,contactid,msg, caption,makeid){
  var infousers = reducerUser.user;
  let separador = msg.split(".");
  var mimetype = "";
  switch(separador[1].toLowerCase()) {
    case 'jpeg':
    case 'png':
    case 'jpg':
      mimetype = "image/jpeg";
    break;

    case 'pdf':
      mimetype = "application/pdf";
    break;

    case 'xls':
      mimetype = "application/vnd.ms-excel";
    break;

    case 'xlsx':
      mimetype = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    break;

    case 'doc':
      mimetype = "application/msword";
    break;

    case 'docx':
      mimetype = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    break;

    case 'ppt':
      mimetype = "application/vnd.ms-powerpoint";
    break;

    case 'pptx':
      mimetype = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    break;
    
    case 'wav':
      mimetype = "audio/wav";
    break;

    case 'mp3':
      mimetype = "audio/mp3";
    break;

    case 'ogg':
      mimetype = "audio/ogg";
    break;

    case 'mpeg':
      mimetype = "audio/mpeg";
    break;
    
    case 'mp4':
      mimetype = "video/mp4";
    break;
    
    case 'zip':
      mimetype = "application/x-zip-compressed";
    break;
  }
  
  let createjson = '{"CDR":'+contactid.cdrid+',"URL":"'+msg+'", "THUMBNAIL":"", "CAPTION":"'+caption+'","MIMETYPE":"'+mimetype+'"}';
  //console.log("WSIMSGLOG\r\n"+infousers.id+"\r\nTYPE\r\n1\r\nTOUSER\r\n1\r\nTOCLIENT\r\n"+contactid.cdrid+"\r\nCALLID\r\n"+makeid+"\r\nUSERNAME\r\n"+infousers.displayname+"\r\nMSG\r\n"+createjson+"\r\nMONUSER\r\n"+infousers.id+"\r\nTMON\r\n3\r\n\r\n")
  
  if(contactid.answer === false){
     socket.send("WSIMSGLOG\r\n"+infousers.id+"\r\nTYPE\r\n1\r\nTOUSER\r\n1\r\nTOCLIENT\r\n"+contactid.cdrid+"\r\nCALLID\r\n"+makeid+"\r\nUSERNAME\r\n"+infousers.displayname+"\r\nMSG\r\n"+createjson+"\r\nMONUSER\r\n"+infousers.id+"\r\nTMON\r\n3\r\n\r\n");
     console.log("WSIMSGLOG\r\n"+infousers.id+"\r\nTYPE\r\n1\r\nTOUSER\r\n1\r\nTOCLIENT\r\n"+contactid.cdrid+"\r\nCALLID\r\n"+makeid+"\r\nUSERNAME\r\n"+infousers.displayname+"\r\nMSG\r\n"+createjson+"\r\nMONUSER\r\n"+infousers.id+"\r\nTMON\r\n3\r\n\r\n")
  }else{
     socket.send("WSIMSGLOG\r\n"+infousers.id+"\r\nTYPE\r\n1\r\nTOUSER\r\n1\r\nTOCLIENT\r\n"+contactid.cdrid+"\r\nCALLID\r\n"+makeid+"\r\nUSERNAME\r\n"+infousers.displayname+"\r\nMSG\r\n"+createjson+"\r\n\r\n");
     console.log("WSIMSGLOG\r\n"+infousers.id+"\r\nTYPE\r\n1\r\nTOUSER\r\n1\r\nTOCLIENT\r\n"+contactid.cdrid+"\r\nCALLID\r\n"+makeid+"\r\nUSERNAME\r\n"+infousers.displayname+"\r\nMSG\r\n"+createjson+"\r\n\r\n")
  }
};

const setupSocket = (
  getState,
  dispatch,
  userinfo,
) => {
  socket.onopen = event => {
    socket.onmessage = event => {
      
      const {queuepermissionReducer, environmentReducer, userReducer, clientdetailsReducer} = getState();

      var valorDiferenca = parseInt(Math.abs(Math.round(environmentReducer.diff_time)));
      let datareceived = "Received: " + event.data;
      const novadata = datareceived.split("\r\n");
      //console.log(novadata)
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
            let CDRID         = novadata.indexOf("CDRID");
            let PSDCOUNT      = novadata.indexOf("PSDCOUNT");
            let PSDTMA        = novadata.indexOf("PSDTMA");
            let INCALLCOUNT   = novadata.indexOf("INCALLCOUNT");
            let INANSCOUNT    = novadata.indexOf("INANSCOUNT");
            let INTMANS       = novadata.indexOf("INTMANS");
            let INSLA         = novadata.indexOf("INSLA");
            let HOUR          = novadata.indexOf("HOUR");
            let OUTCALLCOUNT  = novadata.indexOf("OUTCALLCOUNT");
            let OUTANSCOUNT   = novadata.indexOf("OUTANSCOUNT");
            let OUTTMANS      = novadata.indexOf("OUTTMANS");
            let OUTSLA        = novadata.indexOf("OUTSLA");
            let TMLOGIN       = novadata.indexOf("TMLOGIN");
            let MEDIAID       = novadata.indexOf("MEDIAID");

            let DESCGRUPO     = novadata.indexOf("GROUPNAME");
            let IDGRUPO       = novadata.indexOf("GROUP");
            let USERNAME      = novadata.indexOf("USERNAME");
            let LABEL         = novadata.indexOf("DISPLAYNAME");
            let RAMAL         = novadata.indexOf("EXTEN");
            let MODULE        = novadata.indexOf("MOD");

            if(novadata[13] == 'LV'){
              let iduser = parseInt(novadata[1]);		
              dispatch(refresh_agent(iduser,'LV', 'LV', '', '', '', 0,novadata[PSDCOUNT+1],novadata[PSDTMA+1],novadata[INCALLCOUNT+1],novadata[INANSCOUNT+1],novadata[INTMANS+1],novadata[INSLA+1],novadata[OUTCALLCOUNT+1],novadata[OUTANSCOUNT+1],novadata[OUTTMANS+1],novadata[OUTSLA+1],novadata[TMLOGIN+1],novadata[HOUR+1],novadata[MEDIAID+1],novadata[DESCGRUPO+1],parseInt(novadata[IDGRUPO+1]),novadata[USERNAME+1],novadata[LABEL+1],novadata[RAMAL+1],novadata[MODULE+1]));
            }else if(novadata[13] == 'BQ'){
              let iduser = parseInt(novadata[1]);		
              dispatch(refresh_agent(iduser,'BQ', 'BQ', novadata[23], '', '', 0,novadata[PSDCOUNT+1],novadata[PSDTMA+1],novadata[INCALLCOUNT+1],novadata[INANSCOUNT+1],novadata[INTMANS+1],novadata[INSLA+1],novadata[OUTCALLCOUNT+1],novadata[OUTANSCOUNT+1],novadata[OUTTMANS+1],novadata[OUTSLA+1],novadata[TMLOGIN+1],novadata[HOUR+1],novadata[MEDIAID+1],novadata[DESCGRUPO+1],parseInt(novadata[IDGRUPO+1]),novadata[USERNAME+1],novadata[LABEL+1],novadata[RAMAL+1],novadata[MODULE+1]));
            }else if(novadata[13] == 'RV'){
              let iduser = parseInt(novadata[1]);		
              dispatch(refresh_agent(iduser,'LV', 'RV', novadata[21], novadata[23], novadata[21], 0,novadata[PSDCOUNT+1],novadata[PSDTMA+1],novadata[INCALLCOUNT+1],novadata[INANSCOUNT+1],novadata[INTMANS+1],novadata[INSLA+1],novadata[OUTCALLCOUNT+1],novadata[OUTANSCOUNT+1],novadata[OUTTMANS+1],novadata[OUTSLA+1],novadata[TMLOGIN+1],novadata[HOUR+1],novadata[MEDIAID+1],novadata[DESCGRUPO+1],parseInt(novadata[IDGRUPO+1]),novadata[USERNAME+1],novadata[LABEL+1],novadata[RAMAL+1],novadata[MODULE+1]));
            }else if(novadata[13] == 'AT'){
              let iduser = parseInt(novadata[1]);		
              dispatch(refresh_agent(iduser,'LV', 'AT', novadata[21], novadata[23], novadata[21], 0,novadata[PSDCOUNT+1],novadata[PSDTMA+1],novadata[INCALLCOUNT+1],novadata[INANSCOUNT+1],novadata[INTMANS+1],novadata[INSLA+1],novadata[OUTCALLCOUNT+1],novadata[OUTANSCOUNT+1],novadata[OUTTMANS+1],novadata[OUTSLA+1],novadata[TMLOGIN+1],novadata[HOUR+1],novadata[MEDIAID+1],novadata[DESCGRUPO+1],parseInt(novadata[IDGRUPO+1]),novadata[USERNAME+1],novadata[LABEL+1],novadata[RAMAL+1],novadata[MODULE+1],novadata[CDRID+1]));
            } else if(novadata[13] == 'BQSUPER'){
              let iduser = parseInt(novadata[1]);		
              dispatch(refresh_agent(iduser,'BQSUPER', 'BQSUPER', novadata[23], '', '', 0,novadata[PSDCOUNT+1],novadata[PSDTMA+1],novadata[INCALLCOUNT+1],novadata[INANSCOUNT+1],novadata[INTMANS+1],novadata[INSLA+1],novadata[OUTCALLCOUNT+1],novadata[OUTANSCOUNT+1],novadata[OUTTMANS+1],novadata[OUTSLA+1],novadata[TMLOGIN+1],novadata[HOUR+1],novadata[MEDIAID+1],novadata[DESCGRUPO+1],parseInt(novadata[IDGRUPO+1]),novadata[USERNAME+1],novadata[LABEL+1],novadata[RAMAL+1],novadata[MODULE+1]));
            }else if(novadata[13] == 'CHND'){
              let iduser = parseInt(novadata[1]);		
              dispatch(refresh_agent(iduser,'CHND', 'CHND', novadata[21], novadata[23], novadata[21], 0,novadata[PSDCOUNT+1],novadata[PSDTMA+1],novadata[INCALLCOUNT+1],novadata[INANSCOUNT+1],novadata[INTMANS+1],novadata[INSLA+1],novadata[OUTCALLCOUNT+1],novadata[OUTANSCOUNT+1],novadata[OUTTMANS+1],novadata[OUTSLA+1],novadata[TMLOGIN+1],novadata[HOUR+1],novadata[MEDIAID+1],novadata[DESCGRUPO+1],parseInt(novadata[IDGRUPO+1]),novadata[USERNAME+1],novadata[LABEL+1],novadata[RAMAL+1],novadata[MODULE+1],novadata[CDRID+1]));
            }else if(novadata[13] == ' '){
              let iduser = parseInt(novadata[1]);		
              dispatch(refresh_agent(iduser,null, null, novadata[21], novadata[23], novadata[21], 0,novadata[PSDCOUNT+1],novadata[PSDTMA+1],novadata[INCALLCOUNT+1],novadata[INANSCOUNT+1],novadata[INTMANS+1],novadata[INSLA+1],novadata[OUTCALLCOUNT+1],novadata[OUTANSCOUNT+1],novadata[OUTTMANS+1],novadata[OUTSLA+1],novadata[TMLOGIN+1],novadata[HOUR+1],novadata[MEDIAID+1],novadata[DESCGRUPO+1],parseInt(novadata[IDGRUPO+1]),novadata[USERNAME+1],novadata[LABEL+1],novadata[RAMAL+1],novadata[MODULE+1]));
            }
          break;
        case "Received: ANSWEBCHAT":
          let DIRECTION        = novadata.indexOf("DIRECTION");
          let REATD            = novadata.indexOf("REATD");
          let CONTACTID        = novadata.indexOf("CONTACTID");
          let CONTACTNAME      = novadata.indexOf("CONTACTNAME");
          let SRVINA           = novadata.indexOf("SRVIN");
         
          let telefone         = novadata[CONTACTNAME+1].split("~¿");
					let telefonefilt     = telefone[0].split(": ");
          
          if(parseInt(novadata[DIRECTION+1]) === 1 && novadata[REATD+1] === '0'){
              let received = InsertAnswerACK(parseInt(novadata[CONTACTID+1]), telefonefilt[1],userReducer.user.id, parseInt(novadata[SRVINA+1]),'Entrada')
              received.then(function(result){
                  dispatch(anwsers_accept(true))
                  socket.send("ANSWEBCHATACK\r\n"+userReducer.user.id+"\r\nCONTACTID\r\n"+novadata[CONTACTID+1]+"\r\nTo\r\n"+novadata[1]+"\r\nSRV\r\n1\r\nSRVIN\r\n"+novadata[SRVINA+1]+"\r\nATDID\r\n"+result+"\r\n\r\n");							
              });
          }
          break;
        case 'Received: WSIMSGLOG':
          let MSG             = novadata.indexOf("MSG");
          let TOCLIENT        = novadata.indexOf("TOCLIENT");
          let TYPE            = novadata.indexOf("TYPE");

          let data = Moment().format('DD/MM/YYYY HH:mm');
          let hora = Moment().format('HH:mm');
         
          if(TYPE === 0){
              dispatch(add_messages_queue(makeid(32),null,novadata[MSG+1],false,'0',novadata[TOCLIENT+1],data,hora,clientdetailsReducer.mediaid,'Cli',1,''))
          }else{
            let passjson = JSON.parse(novadata[MSG+1]);
						let url = passjson.URL;
						let filesize = passjson.FILESIZE;
            let caption = passjson.CAPTION;
            dispatch(add_messages_queue(makeid(32),filesize,url,false,'0',novadata[TOCLIENT+1],data,hora,clientdetailsReducer.mediaid,'Cli',3,caption))
          }
              
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
          let TP		          = novadata.indexOf("TP");
          let QUEUEID		      = novadata.indexOf("QUEUEID");
          let CQUEUE	        = novadata.indexOf("CQUEUE");
          let CDRIDQUEUE      = novadata.indexOf("CDRID");

          if(clientdetailsReducer.cdrid === parseInt(novadata[CDRIDQUEUE+1]))
             dispatch(changeStatusQueue(novadata[CQUEUE+1]))

          if(clientdetailsReducer.queueid === parseInt(novadata[QUEUEID+1]))
              dispatch(changeStatusQueue(novadata[CQUEUE+1])  )

          if(qtde_fila>0){
            if(queuepermissionReducer){
              //console.log("PSSOU")
              queuepermissionReducer.map(queue =>{
                //console.log(parseInt(queue.serviceinid),parseInt(novadata[23]))
                if(parseInt(queue.serviceinid)===parseInt(novadata[23])){
                    //if(novadata[7]=='ADD' && novadata[17]=='1'){
                      if(novadata[7]=='ADD'){
                      customerwait = queue.customer_wait;
                      var contactname = novadata[25].split("¿");
                      contactname = contactname[0];
                      dispatch(addListCallQueue(novadata[7],novadata[3],parseInt(novadata[23]),novadata[11],novadata[9],novadata[19],novadata[15],novadata[17],parseInt(novadata[21]),parseInt(novadata[5]),parseInt(novadata[1]), 0, customerwait, contactname, novadata[PROFILEPHOTO+1]))
                      console.log("addListCallQueue")
                    }
                }
              })	 
            }
              
            if((novadata[TP+1]=='NANS' && novadata[CQUEUE+1]=='0')||(novadata[QUEUEID+1]=='ADD' && novadata[CQUEUE+1]=='0')){
              dispatch(editListCallQueue(novadata[7],novadata[3],parseInt(novadata[23]),novadata[11],novadata[9],novadata[19],novadata[15],novadata[17],parseInt(novadata[21]), parseInt(novadata[5]), parseInt(novadata[25]), customerwait, 0, novadata[PROFILEPHOTO+1], novadata[REASON+1]))
              console.log("editListCallQueue")
            }else if(novadata[TP+1]=='CBACK' && novadata[23]==''){
              console.log("returnListCallQueue")
              dispatch(returnListCallQueue(novadata[QUEUEID+1],novadata[3],'2', parseInt(novadata[19]),novadata[17],novadata[PROFILEPHOTO+1]))
            }else if(novadata[TP+1]=='NANS' && novadata[15]=='0'){
             dispatch(returnListCallQueueObs(novadata[QUEUEID+1],novadata[3],'0',novadata[REASON+1]))
            }else if(novadata[TP+1]=='RM'){
              console.log("deleteListCallQueue")
              dispatch(deleteListCallQueue(novadata[QUEUEID+1],novadata[CQUEUE+1]))
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
          valorDiferenca = parseInt(Math.abs(Math.round(ipcurrent.difftime)));
          if(parseInt(novadata[39])>0){
            let timeIni = Moment().format('YYYY/MM/DD HH:mm:ss');
            timeIni = Moment(timeIni).subtract(valorDiferenca,'seconds').format('YYYY/MM/DD HH:mm:ss');
            timefim = Moment(timeIni).subtract(parseInt(novadata[39]), 'seconds').format('DD/MM/YYYY HH:mm:ss')
          }
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
