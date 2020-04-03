import React from "react";
import DEFAULT from "../../../build/images/Profile Bot -1.png"

function createJSON(message){
  var mensagem_tratada = message;
      mensagem_tratada = message.replace(/¿/gi, "\n");
      mensagem_tratada = mensagem_tratada.replace(/§/gi, "\r\n");
      let valor = 1
      try{
      mensagem_tratada = '{"'+valor+'": [{"mensagem_tratada":"'+mensagem_tratada+'"}]}';
      var obj = JSON.parse(mensagem_tratada);
      mensagem_tratada = obj[1][0].mensagem_tratada
      } catch(e){
        mensagem_tratada = message;
        mensagem_tratada = mensagem_tratada.replace(/\r\n/gi, "ªª");
        mensagem_tratada = mensagem_tratada.replace(/\r\n/gi, "ªª");
        mensagem_tratada = mensagem_tratada.replace(/[^A-ZÀ-Ú a-zà-ú 0-9 , . ? ! *  # ; : '-' _ + § ¿ { } ' " ª \\ \ ]/g, '')
        mensagem_tratada = '{"'+valor+'": [{"mensagem_tratada":"'+mensagem_tratada+'"}]}';
        var obj = JSON.parse(mensagem_tratada);
        mensagem_tratada = obj[1][0].mensagem_tratada
        mensagem_tratada = mensagem_tratada.replace(/ªª/gi, "\r\n");
      }
      return mensagem_tratada;
}

const ClientChatItem = ({details,position,pathfile}) => {
  var message = createJSON(details.messagem)
  return (
  
      <div className={"mini-chat__message-container__buddle mini-chat__message-container__buddle--"+position}>
        <img
          className={position === 'right' ? "mini-chat__message-container__buddle__img":"mini-chat__message-container__img-bot"}
          src={position === 'left' ? "https://cloud.ingweb.com.br/"+pathfile:DEFAULT}
          alt="perfil"
          style={{marginRight: '10px', marginLeft: '10px'}}
        />
        <div class="wrapper-buddle">
          <div className="mini-chat__message-container__buddle__text">
            {message}
          </div>
        </div>
      </div>
   
  );
};

export default ClientChatItem;
