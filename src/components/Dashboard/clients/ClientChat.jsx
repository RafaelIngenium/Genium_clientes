import React, { useState, useRef, useEffect } from "react";
import ClientChatItem from "./ClientChatItem"
import { useSelector, useDispatch } from "react-redux";
import Moment from 'moment'
import { ReactComponent as Emoji } from "../../../build/images/emoji.svg";
import { ReactComponent as Send } from "../../../build/images/send-minichat.svg";
import { ReactComponent as Outline } from "../../../build/images/message-outline.svg";
import { ReactComponent as Attachment } from "../../../build/images/attachment.svg";
import { ReactComponent as Voz } from "../../../build/images/voz_icon.svg";
import { PopUver } from "../../../utils/Typpy";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import TimeCounterSecond from '../../../utils/TimeCounterSecond'
import { InviteMessages,SendFile } from '../../../services/imsdn'
import { add_messages_queue, insert_upload } from "../../../store/clientdetails/clientdetails.action"
import MicRecorder from 'mic-recorder-to-mp3';
import { connection_platform } from "../../../services/api";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
var data = ""
var temp = ""

function makeid(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const ClientChat = () => {
  const clientdetails                       = useSelector(state => state.clientdetailsReducer);
  const user                                = useSelector(state => state.userReducer);
  const quickanswers                        = useSelector(state => state.quickanswerReducer);
  const [textInput, setText]                = useState("");
  const [scroller, setScroller]             = useState("");
  const dispatch                            = useDispatch();
  const containers                          = useRef();
  const inputEl                             = useRef(null);
  const simultClick                         = useRef(null);
  const inputFile                           = useRef(null);
  const [loadedFile, setLoadedFile]         = useState("");
  const [selectedFile, setselectedFile]     = useState("");
  const [file, setFile]                     = useState("");
  const [record, setRecord]                 = useState(true);
  const [sendrecord, setsendRecord]         = useState(false);
  const [filerecord, setfileRecord]         = useState([]);
  const [isblocked, setBlocked]             = useState(false);

  const renderPopoverMessage = (e,todos) => (
    <div class="context-menu" id="premade-msg">
        <div class="context-menu__list premade-msg">

            <p class="premade-msg__title">Respostas rápidas</p>
            <div class="premade-msg__content">
                <ul class="premade-msg__list">
                    {todos.map(todo => (
                      <li class="premade-msg__item" onClick={() => addMessage(todo.qck_asw_answer,todo.editable,todo.mimetypeid,todo.filepath)}>
                        {todo.qck_asw_keyword}
                      </li>
                    ))}
                </ul>
                <div class="premade-msg__input-wrapper">
                    <input type="text" class="premade-msg__search-input" placeholder="Pesquise uma resposta..." />
                    <span class="premade-msg__input-icon">
                        <i class="material-icons">search</i>
                    </span>
                </div>
            </div>

        </div>
    </div>
  );

  useEffect(() => {
    if(connection_platform.type_connect === 'https'){        
      navigator.getMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia)

        navigator.getMedia({ audio: true },
        () => {
          setBlocked(false)
        },
        () => {
          setBlocked(false)
        },
      );
    }
  }, [])

  useEffect(() => {
    if(sendrecord && filerecord){
      let audiofile = []
      let data = new FormData();
      let hora = Moment().format("HH-mm-ss");
      let random = Math.floor(Math.random() * 999999 + 100000);
      random = random + "_" + hora;
      let namefile = random + ".mp3";
      data.append("file", filerecord, namefile);
      audiofile = data;
      dispatch(insert_upload(audiofile,makeid(32),textInput,filerecord.size))
      setfileRecord('')
      setsendRecord(false)
    }
    
  },[filerecord])

  const start = () => {
    setRecord(!record)
    if (isblocked) {
    } else {
      Mp3Recorder
        .start()
        .then(() => {
        }).catch((e) => console.error(e));
    }
  };

  
  const stopIn = () => {
    setRecord(!record)
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = blob;
        setsendRecord(true)
        setfileRecord(blobURL)
      }).catch((e) => console.log(e));
  };

  const stop = () => {
    setRecord(!record)
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        setsendRecord(false)
        setfileRecord([])
      }).catch((e) => console.log(e));
  };

  const addEmoji = (emoji) => { 
    setText(textInput+emoji.native)
  }

  const clickFile = () => { 
    inputFile.current.click();
  }

  const handleselectedFile = (event) => {
    let filesend = event.target.files[0];
    if (filesend !== undefined) {
      setselectedFile(filesend)
      setLoadedFile(0)
      let data = new FormData();
      let namefile = filesend.name;
      let hora = Moment().format("HH-mm-ss");
      let random = Math.floor(Math.random() * 999999 + 100000);
      random = random + "_" + hora;
      let ext = namefile.split(".").pop();
      namefile = random + "." + ext;
      data.append("file", filesend, namefile);
        dispatch(insert_upload(data,makeid(32),textInput,filesend.size))
        setText('')
    }

    document.getElementById("file-input").value = "";
  }

  const addMessage = (texto,editable,mimetypeid,filepath) => {
      setText(textInput+texto);
      if (mimetypeid !=1) {
        let gerarnomearquivo = makeid(32);
        let photo = {
          uri: filepath,
          type: "application/pdf",
          name: gerarnomearquivo + ".pdf"
        };
        let fileencryp = new FormData();
        fileencryp.append("file", gerarnomearquivo + ".pdf");
        let arrayfile = [filepath, textInput+texto, mimetypeid];
        setFile(arrayfile);
      }else{
        setFile([]);
        if (editable == false) {
          document.getElementById("chat-message").disabled = true;
        } else {
          document.getElementById("chat-message").disabled = false;
          document.getElementById("chat-message").focus();
        }
      } 
      simultClick.current.click();
      document.getElementById("chat-message").focus();
  }

  const sendMessage = () => { 
    let data = Moment().format('DD/MM/YYYY HH:mm');
    let hora = Moment().format('HH:mm');
    if(file != null && file[2] != 1 && file.length > 0) {
      dispatch(add_messages_queue(makeid,file[2],file[0],true,clientdetails.caller,clientdetails.cdrid, data, hora, clientdetails.mediaid, 'Me', 3,textInput))
      SendFile(user, clientdetails, file[0], textInput, makeid(32));
      setFile([])
    }else{
      if(textInput !== ''){
        dispatch(add_messages_queue(makeid(32),null,textInput,true,clientdetails.caller,clientdetails.cdrid,data,hora,clientdetails.mediaid,'Me',1,''))
        InviteMessages(user.user,clientdetails,textInput)
      }
    }
    setText('')  
  }

  useEffect(() => {
    if (scroller !== containers.current.scrollHeight) {
      containers.current.scrollTop = containers.current.scrollHeight;
      setScroller(containers.current.scrollHeight);
    }
  },[clientdetails])

  const HandleKeyPress = (event) => {
    let data = Moment().format('DD/MM/YYYY HH:mm');
    let hora = Moment().format('HH:mm');
    if (event.key === "Enter" && event.shiftKey === false) {
      if(file != null && file[2] != 1 && file.length > 0) {
        dispatch(add_messages_queue(makeid,file[2],file[0],true,clientdetails.caller,clientdetails.cdrid, data, hora, clientdetails.mediaid, 'Me', 3,textInput))
        SendFile(user, clientdetails, file[0], textInput, makeid(32));
        setText('')
      }else{
        let data = Moment().format('DD/MM/YYYY HH:mm');
        let hora = Moment().format('HH:mm');
        if(textInput !== ''){
          dispatch(add_messages_queue(makeid(32),null,textInput,true,clientdetails.caller,clientdetails.cdrid,data,hora,clientdetails.mediaid,'Me',1,''))
          InviteMessages(user.user,clientdetails,textInput)
        }
        setText('')
      }
    }
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
        <div className="mini-chat__body" >
          <div className="mini-chat__message-container" ref={containers} style={{maxHeight: '400px'}}>
            {clientdetails.messages.map(details => (
              <>
               
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
                <input class="mini-chat__footer__input-content__input" ref={inputEl} onChange={event => setText(event.target.value)} type='text' value={textInput} onKeyUp={event => HandleKeyPress(event)} id="chat-message" name="chat-message" placeholder="Escreva sua mensagem" />
                <button class="mini-chat__footer__input-content__sent" onClick={sendMessage}>
                    <Send />
                </button>
            </div>

            <div class={record ? "wrapper-buttons active":"wrapper-buttons"} onClick={start}>
                 <PopUver trigger="click" interactive={true} content={renderPopoverMessage(this, quickanswers)}>
                    <button ref={simultClick} class="mini-chat__footer__btns tippy-context-menu" data-template="premade-msg">
                        <Outline />
                    </button>
                 </PopUver>

                <button class="mini-chat__footer__btns attachment" onClick={clickFile}>
                    <Attachment />
                    <input
                        style={{ display: "none" }}
                        type="file"
                        name="upload"
                        ref={inputFile}
                        id="file-input"
                        onChange={event => handleselectedFile(event)}
                      />
                </button>


                <button class="mini-chat__footer__btns">
                    <Voz />
                </button>

            </div>

            <div class={record ? "active-voice":"active-voice active"} disabled={isblocked}>
                <a href="#" class="cancel"><i class="material-icons" onClick={stop}>close</i></a>

                <div class="active-chats__timer active-chats__timer--active-voice">
                    <span class="active-chats__timer-icon active-chats__timer--active-voice-icon alta">•</span><TimeCounterSecond key={record} horario={0} />
                </div>

                <a href="#" class="done"><i class="material-icons" onClick={stopIn}>done</i></a>

            </div>
          </div>
      </div>
    </div>
  );
};

export default ClientChat;
