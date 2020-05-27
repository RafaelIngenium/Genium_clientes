import React, { useState, useEffect } from "react";
import ModalImage from "react-modal-image";

const { connection_platform } = require("../../../services/api")

var gethostname = window.location.hostname;
var pathname = "";

var iplocal = connection_platform.ip_intern
var port = connection_platform.port_backend_intern;

if(gethostname === 'localhost')
  pathname = iplocal;
else
  pathname = gethostname;

var ipcurrent = pathname;

if(pathname !== connection_platform.ip_intern){
    ipcurrent = connection_platform.ip_apache_view_extern;
    if(parseInt(connection_platform.port_apache_view_extern) !== 80){
        ipcurrent = ipcurrent+':'+connection_platform.port_apache_view_extern;
    }
}else{
    ipcurrent = connection_platform.ip_apache_view_intern;
    if(parseInt(connection_platform.port_apache_view_intern) !== 80){
        ipcurrent = ipcurrent+':'+connection_platform.port_apache_view_intern;
    }
}

const MessageContainerImg = ({
  mimetypeid,
  messagem,
  filesize,
  caption
}) => {
    var Name = messagem.split('/').pop();
        Name = Name.split('.').shift();

  return (
    <div class="bubble-media">
        <div class="bubble-media__image">
            <ModalImage
                small={connection_platform.type_connect+'://'+ ipcurrent + messagem}
                large={connection_platform.type_connect+'://'+ ipcurrent + messagem}
                hideDownload={true}
                className="bubble-media__image-file"
            />
        </div>
        <div class="bubble-media__mediaInfo">
            <span class="bubble-media__fileType">
                <img class="bubble-media__fileIcon" src="../build/images/media-icon.png" alt="" />
                <span class="bubble-media__fileExtension">JPG</span>
            </span>
            <span class="bubble-media__fileName">
                <p class="bubble-media__text">{Name}</p>
                <div class="fileinfo__bar">
                    <span class="fileinfo__size">{filesize}</span> • <span class="fileinfo__type">JPG</span>
                </div>
            </span>
            <span class="bubble-media__download">
                    <a href={connection_platform.type_connect+'://'+ ipcurrent + messagem} target="_blank" download className="bubble-media__btnDownload">
                         <i class="material-icons">get_app</i>
                    </a>
            </span>
        </div>
        <div className="text">{caption}</div>
        <div class="bubble-media__progressbar-wrapper">
            <div class="bubble-media__progressbar-track">
                <div class="bubble-media__progressbar-bullet" style={{width:'17%'}}></div>
            </div>
            <span class="bubble-media__progressbar-counter ">17%</span>
        </div>
    </div>
  );
};

export default MessageContainerImg;
