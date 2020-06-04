import React from "react";
import DEFAULT from "../../../build/images/Profile Bot -1.png";
import CLIENTDEFAULT from "../../../build/images/default.png";
import MessageContainer from "../chat-section/MessageContainer";
import MessageContainerImg from "../chat-section/MessageContainerImg";
import MessageContainerAudio from "../chat-section/MessageContainerAudio";
import MessageContainerDocs from "../chat-section/MessageContainerDocs";
import MessageContainerLocation from "../chat-section/MessageContainerLocation";
import MessageContainerPDF from "../chat-section/MessageContainerPDF";
import MessageContainerVideo from "../chat-section/MessageContainerVideo";
import { dbfileSize } from '../../../store/clientdetails/clientdetails.action';
import Moment from 'moment'

var data = ""
var temp = ""

const ClientChatItem = ({details,pathfile}) => {
  {
    (() => {
            data = Moment(details.data_hora_envio,"DD/MM/YYYY HH:mm").format("DD/MM/YYYY");
            var hora = Moment(details.data_hora_envio,"DD/MM/YYYY HH:mm:ss").format("HH:mm");
            var now  = Moment().format('DD/MM/YYYY')


              if(data === now)
                data = 'Hoje,'
            
              
              if(hora !== temp){
                temp = hora;
                return  <span className="mini-chat__message-container__time">{data+' '+hora }</span>
              }
    })()
  }
  var position = details.agente === true ? "right":"left";
  return (
  
      <div className={"mini-chat__message-container__buddle mini-chat__message-container__buddle--"+position}>
        {(() => {
              if(pathfile === null)
                pathfile = CLIENTDEFAULT;
              else 
               pathfile = "https://cloud.ingweb.com.br/"+pathfile;
        })()}
        <img
          className={position === 'right' ? "mini-chat__message-container__buddle__img":"mini-chat__message-container__img-bot"}
          src={position === 'left' ? pathfile:DEFAULT}
          alt="perfil"
          style={{marginRight: '10px', marginLeft: '10px'}}
        />
        <div class="wrapper-buddle">
          <div className="mini-chat__message-container__buddle__text">
            {(() => {
                  const msgProps = {
                    mimetypeid: details.mimetypeid,
                    messagem: details.messagem,
                    filesize: dbfileSize(details.filesize),
                    caption: details.caption
                  };
                  if(details.mimetypeid == "1" || details.mimetypeid == "2"){
                    return <MessageContainer {...msgProps} />
                  }else if(details.mimetypeid == "3" || details.mimetypeid == "4" || details.mimetypeid == "5" || (details.mimetypeid >= "6" && details.mimetypeid <= 28)){
                    let separador = details.messagem.split(".");
                    switch(separador[1]) {
                    case 'jpeg':
                    case 'png':
                    case 'PNG':
                    case 'jpg':
                      return <MessageContainerImg {...msgProps} />
                    break;
                      case 'pdf':
                      return <MessageContainerPDF {...msgProps} />
                    break;
                    case 'xls':
                    case 'xlsx':
                    case 'doc':
                    case 'docx':
                    case 'ppt':
                    case 'pptx':
                      return <MessageContainerDocs {...msgProps} />
                    break;
                    case 'wav':
                    case 'mp3':
                    case 'ogg':
                    case 'mpeg':
                      return <MessageContainerAudio {...msgProps} />
                    break;
                    case 'mp4':
                      return <MessageContainerVideo {...msgProps} />
                    break;
                    }
                }else if(details.mimetypeid == "29"){
                      return <MessageContainerLocation {...msgProps} />
                }
              })()
            }
          </div>
        </div>
      </div>
   
  );
};

export default ClientChatItem;
