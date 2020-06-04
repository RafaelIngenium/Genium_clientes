import React, { useState, useRef, useEffect } from "react";
import ClientChatItem from "./ClientChatItem"
import { useSelector, useDispatch } from "react-redux";
import Moment from 'moment'
import 'emoji-mart/css/emoji-mart.css'
import AudioContainer from '../chat-section/AudioContainer'
import ButtonSendContainer from '../chat-section/ButtonSendContainer'
import ButtonRecordContainer from '../chat-section/ButtonRecordContainer'
import AttachmentContainer from '../chat-section/AttachmentContainer'
import QuickAnswerContainer from '../chat-section/QuickAnswerContainer'
import EmojiContainer from '../chat-section/EmojiContainer'
import { InviteMessages,SendFile } from '../../../services/imsdn'
import { add_messages_queue, insert_upload } from "../../../store/clientdetails/clientdetails.action"
import { connection_platform } from "../../../services/api";
import MicRecorder from 'mic-recorder-to-mp3';
import InputContainer from '../chat-section/InputContainer'

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

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
  const [record, setRecord]                 = useState(true);
  const [file, setFile]                     = useState("");
  const [sendrecord, setsendRecord]         = useState(false);
  const [filerecord, setfileRecord]         = useState([]);
  const [isblocked, setBlocked]             = useState(false);

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



  
function makeid(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
  
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

  return (
    <div className="chat-content">
      <div className="chat">
        <div className="mini-chat__body" >
          <div className="mini-chat__message-container" ref={containers} style={{maxHeight: '400px'}}>
            {clientdetails.messages.map(details => (
                <ClientChatItem details={details} pathfile={clientdetails.pathfile} />
              ))}
            
            {/* <!-- <span className="mini-chat__message-container__time">Hoje, 05-06-2019</span> --> */}

            <div className="mini-chat__digitando">
              {/* Usuario está digitando */}
              {/* <span>...</span> */}
            </div>
          </div>
        </div>
        <div class="mini-chat__footer" style={{display: clientdetails.status === '1' && clientdetails.mediaid !== 1 ? 'flex':'none'}}>
            <div class="mini-chat__footer__input-content">
                <EmojiContainer addEmoji={addEmoji} />
                <InputContainer setText={setText} inputEl={inputEl} textInput={textInput} HandleKeyPress={HandleKeyPress} />
                <ButtonSendContainer sendMessage={sendMessage} />
            </div>
            <div class={record ? "wrapper-buttons active":"wrapper-buttons"}>
                <QuickAnswerContainer quickanswers={quickanswers} simultClick={simultClick} addMessage={addMessage} />
                <AttachmentContainer textInput={textInput} inputFile={inputFile} handleselectedFile={handleselectedFile} clickFile={clickFile} />
                <ButtonRecordContainer start={start} />
            </div>
            <AudioContainer record={record} setRecord={setRecord} textInput={textInput} start={start} stopIn={stopIn} stop={stop} isblocked={isblocked} />
          </div>
      </div>
    </div>
  );
};

export default ClientChat;
