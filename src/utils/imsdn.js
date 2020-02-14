import ReconnectingWebSocket from "reconnecting-websocket";
import { connection_platform } from "./api";

const iplocal = connection_platform.ip_intern;
const portims = connection_platform.port_socket_intern;

var port = connection_platform.port_backend_intern;
var ipcurrent = "";
var gethostname = window.location.hostname;
var pathname = gethostname === "localhost" ? iplocal : gethostname;
var socket = "";

export const sendIPSocket = (imsdnpri, imsdnsec, portims) => {
  let urls = [];

  urls.push(connection_platform.type_socket + "://" + imsdnpri + ":" + portims);
  if (imsdnsec !== null) {
    urls.push(
      connection_platform.type_socket + "://" + imsdnsec + ":" + portims
    );
  }

  let urlIndex = 0;
  const urlProvider = () => urls[urlIndex++ % urls.length];
  socket = new ReconnectingWebSocket(urlProvider, [], {
    constructor: WebSocket,
    connectionTimeout: 1000, // in milliseconds
    reconnectInterval: 1000
  });
  ipcurrent = iplocal;
  return { urls, urlIndex, urlProvider, ipcurrent, socket };
};

// const setupSocket = (
//   getState,
//   dispatch,
//   userid,
//   displayname,
//   idgroup,
//   ramal,
//   grupo,
//   username,
//   sipid
// ) => {
//   socket.onopen = event => {
//     socket.onmessage = event => {
//       //console.log(event.data);
//       const {} = getState();

//       let datareceived = "Received: " + event.data;
//       const novadata = datareceived.split("\r\n");
//       switch (novadata[0]) {
//         case "Received: USRMSGLOG":
//           break;
//         case "Received: GRPMSGLOG":
//           break;
//         case "Received: GRPMSGLOGACK":
//           break;
//         case "Received: USRTYPING":
//           break;
//         case "Received: USRMSGLOGACK":
//           break;
//         case "Received: USRMSGLOGREAD":
//           break;
//         case "Received: INFO":
//           break;
//         case "Received: ANSWEBCHAT":
//           break;
//         case "Received: WSIMSGLOGREAD":
//           break;
//         case "Received: RETURNBOTACK":
//           break;
//         case "Received: WSIBYE":
//           break;
//         case "Received: CHATTRANSFERCMPLT":
//           break;
//         case "Received: CALLQUEUE":
//           break;
//         case "Received: SUP_ACT":
//           break;
//         case "Received: SHUTDOWN":
//           break;
//         case "Received: WSITYPING":
//           break;
//         case "Received: MSS":
//           break;
//         default:
//           break;
//       }
//     };

//     socket.onclose = function(evt) {
//       // start();
//     };

//     socket.onerror = function(evt) {
//       console.log("Error!");
//     };

//     return socket;
//   };
// };
// export default setupSocket;
