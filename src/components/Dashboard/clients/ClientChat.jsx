import React from "react";
import ClientChatItem from "./ClientChatItem"
import { useSelector } from "react-redux";
import Moment from 'moment'
import { ReactComponent as Emoji } from "../../../build/images/emoji.svg";
import { ReactComponent as Send } from "../../../build/images/send-minichat.svg";
import { ReactComponent as Outline } from "../../../build/images/message-outline.svg";
import { ReactComponent as Attachment } from "../../../build/images/attachment.svg";
import { ReactComponent as Voz } from "../../../build/images/voz_icon.svg";
import { PopUver } from "../../../utils/Typpy";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

var data = ""
var temp = ""

const ClientChat = () => {
  const clientdetails              = useSelector(state => state.clientdetailsReducer);

  const renderPopoverMessage = (e) => (
    <div class="context-menu emoji-container" id="emoji-container">
    </div>
  );

  function addEmoji(emoji){
    console.log("EMOJI", emoji.native)
    let string = document.getElementById("chat-message").innerText
    document.getElementById("chat-message").innerText = string+emoji.native;
  }
  
  const renderPopoverEmoji = (e) => (
    <div class="context-menu emoji-container" id="emoji-container">
      <div class="context-menu__list">
         <Picker 
         onSelect={addEmoji}
         set='google'
         showPreview={false}
         showSkinTones={false}
         skin='1'
         autoFocus='true'
         i18n={{search: 'Buscar um emoji',
         clear: 'Limpar', // Accessible label on "clear" button
         notfound: 'Nenhum emoji encontrado',
         skintext: 'Default Skin Tone',
         skintones: {
          1: 'Light Skin Tone',
        },
         categories: {
           search: 'Resultados da busca',
           recent: 'Recentes',
           smileys: 'Emojis e Pessoas',
           people: 'Emojis e Pessoas',
           nature: 'Animais e natureza',
           foods: 'Comida e Bebida',
           activity: 'Atividades',
           places: 'Viagens & Locais',
           objects: 'Objetos',
           symbols: 'Símbolos',
           flags: 'Bandeiras',
           custom: 'Custom',
         }}}
         />
      </div>
    </div>
  );
  
  return (
    <div className="chat-content">
      <div className="chat">
        <div className="mini-chat__body">
          <div className="mini-chat__message-container">
            {clientdetails.messages.map(details => (
              <>
               
                {
                  (() => {
                          data = Moment(details.data_hora_envio,"DD/MM/YYYY HH:mm").format("DD/MM/YYYY");
                          var hora = Moment(details.data_hora_envio,"DD/MM/YYYY HH:mm:ss").format("HH:mm");
                          var now  = Moment().format('DD/MM/YYYY')


                            if(data === now)
                              data = 'Hoje,'
                            
                            // console.log("COMPARARACO", now+'==='+temp)
                            
                            // if(now !== temp){
                            //   temp = now;
                              return  <span className="mini-chat__message-container__time">{data+' '+hora }</span>
                            // }
                  })()
                }
                <ClientChatItem details={details} position={details.agente === true ? "right":"left"} pathfile={clientdetails.pathfile} />
              </>
              ))}
            
            {/* <!-- <span className="mini-chat__message-container__time">Hoje, 05-06-2019</span> --> */}

            <div className="mini-chat__digitando">
              {/* Usuario está digitando */}
              {/* <span>...</span> */}
            </div>
          </div>
        </div>

        <div class="mini-chat__footer">
            <div class="mini-chat__footer__input-content">
                <PopUver trigger="click" interactive={true} content={renderPopoverEmoji(this)}>
                  <button class="mini-chat__footer__input-content__emoji tippy-context-menu" data-template="emoji">
                      <Emoji />
                  </button>
                </PopUver>
                <input class="mini-chat__footer__input-content__input" type='text' id="chat-message" placeholder="Escreva sua mensagem" />
                <button class="mini-chat__footer__input-content__sent">
                    <Send />
                </button>
            </div>

            <div class="wrapper-buttons active">

                <button class="mini-chat__footer__btns tippy-context-menu" data-template="premade-msg">
                    <Outline />
                </button>



                <button class="mini-chat__footer__btns attachment">
                    <Attachment />
                </button>


                <button class="mini-chat__footer__btns">
                    <Voz />
                </button>

            </div>

            <div class="active-voice">
                <a href="#" class="cancel"><i class="material-icons">close</i></a>

                <div class="active-chats__timer active-chats__timer--active-voice">
                    <span class="active-chats__timer-icon active-chats__timer--active-voice-icon alta">•</span>00:15:27
                </div>

                <a href="#" class="done"><i class="material-icons">done</i></a>

            </div>
          </div>
      </div>
    </div>
  );
};

export default ClientChat;
