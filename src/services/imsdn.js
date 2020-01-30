// import {} from '.'
import Moment from 'moment'
import axios from 'axios'
import React  from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';

	var socket = "";
      
	
    socket = new ReconnectingWebSocket(connection_platform.type_socket+'://'+connection_platform.ip_socket_intern+':'+portims, [], {
                    constructor: WebSocket,
                    connectionTimeout: 1000,  // in milliseconds
                    reconnectInterval: 1000,
                    });
    ipcurrent = iplocal;


const setupSocket = (getState ,dispatch, userid, displayname, idgroup, ramal, grupo, username, sipid) => {

	socket.onopen = (event) => {
    socket.onmessage = (event) => {
		
		//console.log(event.data);
		const {} = getState();

		let datareceived = 'Received: ' + event.data;
		const novadata = datareceived.split("\r\n");
		switch (novadata[0]) {
			case 'Received: USRMSGLOG':
                break
			case 'Received: GRPMSGLOG':
				break
			case 'Received: GRPMSGLOGACK':
                break
			case 'Received: USRTYPING':
				break
			case 'Received: USRMSGLOGACK':
				break
			case 'Received: USRMSGLOGREAD':
				break
			case 'Received: INFO':
                break
            case 'Received: ANSWEBCHAT':
                break
			case 'Received: WSIMSGLOGREAD':
				break
			case 'Received: RETURNBOTACK':
				break
			case 'Received: WSIBYE':
				break
			case 'Received: CHATTRANSFERCMPLT':
				break
			case 'Received: CALLQUEUE':
				break
			case 'Received: SUP_ACT':
				break
			case 'Received: SHUTDOWN':
				break
			case 'Received: WSITYPING':
			    break	
			case 'Received: MSS':
			    break					
			default:
				break
		}
	}

	socket.onclose = function(evt) {
		start();
	};

	socket.onerror = function(evt) {
		console.log("Error!");
	};

	return socket
}

export default setupSocket
