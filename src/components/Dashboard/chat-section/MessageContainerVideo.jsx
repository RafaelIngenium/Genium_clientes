import React, { useState, useEffect } from "react";

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

const MessageContainerVideo = ({
    mimetypeid,
    messagem,
    filesize
  }) => {
    var Name = messagem.split('/').pop();
        Name = Name.split('.').shift();

  return (
    <div class="bubble-media">
        <div class="bubble-media__video">
             <video className="bubble-media__video-frame" controls>
                <source
                    className="bubble-media__video-file"
                    src={connection_platform.type_connect+'://'+ ipcurrent + messagem}
                    type="video/mp4"
                />
                Seu navegador nao suporta esse tipo de arquivo.
            </video>
        </div>
        <div class="bubble-media__mediaInfo">
            <span class="bubble-media__fileType">
                <img class="bubble-media__fileIcon" src="../build/images/media-icon.png" alt="" />
                <span class="bubble-media__fileExtension">AVI</span>
            </span>
            <span class="bubble-media__fileName">
                <p class="bubble-media__text">{Name}</p>
                <div class="fileinfo__bar">
                    <span class="fileinfo__size">{filesize}</span> • <span class="fileinfo__type">AVI</span>
                </div>
            </span>
            <span class="bubble-media__download">
                <i class="material-icons">get_app</i>
            </span>
        </div>
        <div class="bubble-media__progressbar-wrapper">
            <div class="bubble-media__progressbar-track">
                <div class="bubble-media__progressbar-bullet" style={{width:'17%'}}></div>
            </div>
            <span class="bubble-media__progressbar-counter ">17%</span>
        </div>
    </div>
  );
};

export default MessageContainerVideo;
