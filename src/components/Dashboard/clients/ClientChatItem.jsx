import React from "react";
import DEFAULT from "../../../build/images/Profile Bot -1.png"

function isJson(item) {
  item = typeof item !== "string"
      ? JSON.stringify(item)
      : item;

  try {   
      item = JSON.parse(item);
  } catch (e) {
      return false;
  }

  if (typeof item === "object" && item !== null) {
      return true;
  }

  return false;
}

function createJSON(item){
  var mensagem_tratada = item
  mensagem_tratada = item.replace(/¿/gi, "\n");
  mensagem_tratada = mensagem_tratada.replace(/§/gi, "\r\n");
  let valor = 1
  try{
  mensagem_tratada = '{"'+valor+'": [{"mensagem_tratada":"'+mensagem_tratada+'"}]}';
  var obj = JSON.parse(mensagem_tratada);
  mensagem_tratada = obj[1][0].mensagem_tratada
  } catch(e){
    mensagem_tratada = item;
    mensagem_tratada = mensagem_tratada.replace(/\r\n/gi, "ªª");
    mensagem_tratada = mensagem_tratada.replace(/\r\n/gi, "ªª");
    mensagem_tratada = mensagem_tratada.replace(/"/gi, "");
    mensagem_tratada = mensagem_tratada.replace(/[^A-ZÀ-Ú a-zà-ú 0-9 , . ? ! *  # ; : '-' _ + § ¿ { } ' " ª \\ \ ]/g, '')
    mensagem_tratada = '{"'+valor+'": [{"mensagem_tratada":"'+mensagem_tratada+'"}]}';
    try{
      var obj = JSON.parse(mensagem_tratada);
      mensagem_tratada = obj[1][0].mensagem_tratada
      mensagem_tratada = mensagem_tratada.replace(/ªª/gi, "\r\n");
    } catch(e){
      mensagem_tratada = item;    
    }
  }
  return mensagem_tratada;
}

const ClientChatItem = ({details,position,pathfile}) => {
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
            {(() => {
                  if(details.mimetypeid == "1"){
                    var message = createJSON(details.messagem)
                    // message = message.replace(/¿/gi, "\n");
                    // message = message.replace(/¿/gi, "\r\n");
                    // message = message.replace(/↵/gi, "\r\n");
                    // message = message.replace(/↵/gi, "\n");
                    console.log(message)
                    return message;
                  }else if(details.mimetypeid == "2"){
                      if (isJson(details.messagem) === true){
                        let json = JSON.parse(details.messagem);
                        let options = json.options;
                        let i = 1;
                        var opcoes = [];
                        for (i in options) {
                            opcoes.push(i+" - "+options[i][1]);
                        }
                        return json.msg+" \r\n "
                      }else{
                          return details.messagem
                      }
                  }
              })()
            }
          </div>
        </div>
      </div>
   
  );
};

export default ClientChatItem;
