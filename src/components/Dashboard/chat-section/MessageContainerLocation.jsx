import React, { useState, useEffect } from "react";
import ReactMapGL, {Marker} from 'react-map-gl';

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

const MessageContainerLocation = ({
  messagem
}) => {
    
  let location = JSON.parse(messagem)
  const TOKEN = 'pk.eyJ1IjoiZ2FicmllbGIxOCIsImEiOiJjazR4NW9yYXAyb3dkM25sYWQ1ZHYycThuIn0.1MSSnEAXvqfNvl8yqrJirg'
  const [viewport, setViewport] = useState({
    width: 300,
    height: 200,
    latitude: location.LATITUDE,
    longitude: location.LONGITUDE,
    zoom: 14
  });

 let latitude = location.LATITUDE
 let longitude = location.LONGITUDE

  return (
    <div class="bubble-media">
        <div class="bubble-media__image">
        <ReactMapGL
                {...viewport}
                onViewportChange={setViewport}
                mapboxApiAccessToken={TOKEN}
            >
            <Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
                <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" style={{width:'10%'}} width="10" />
            </Marker>
        </ReactMapGL>
        </div>
        <div class="bubble-media__mediaInfo">
            <span class="bubble-media__fileType">
                <img class="bubble-media__fileIcon" src="../build/images/media-icon.png" alt="" />
                <span class="bubble-media__fileExtension">Localização</span>
            </span>
            <span class="bubble-media__fileName">
                <p class="bubble-media__text">Localização</p>
                <div class="fileinfo__bar">
                   • <span class="fileinfo__type">MAPA</span>
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

export default MessageContainerLocation;
