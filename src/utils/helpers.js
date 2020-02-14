export const timeArray = [
  { value: "0", label: "00:00" },
  { value: "1", label: "01:00" },
  { value: "2", label: "02:00" },
  { value: "3", label: "03:00" },
  { value: "4", label: "04:00" },
  { value: "5", label: "05:00" },
  { value: "6", label: "06:00" },
  { value: "7", label: "07:00" },
  { value: "8", label: "08:00" },
  { value: "9", label: "09:00" },
  { value: "10", label: "10:00" },
  { value: "11", label: "11:00" },
  { value: "12", label: "12:00" },
  { value: "13", label: "13:00" },
  { value: "14", label: "14:00" },
  { value: "15", label: "15:00" },
  { value: "16", label: "16:00" },
  { value: "17", label: "17:00" },
  { value: "18", label: "18:00" },
  { value: "19", label: "19:00" },
  { value: "20", label: "20:00" },
  { value: "21", label: "21:00" },
  { value: "22", label: "22:00" },
  { value: "23", label: "23:00" }
];

// function start() {
//   let post = Moment().format("DD/MM/YYYY HH:mm:ss");

//   var valorDiferenca = parseInt(Math.abs(Math.round(ipcurrent.difftime)));

//   if (parseInt(ipcurrent.difftime) < 0) {
//     post = Moment()
//       .subtract(valorDiferenca, "seconds")
//       .format("DD/MM/YYYY HH:mm:ss");
//   } else {
//     post = Moment()
//       .add(valorDiferenca, "seconds")
//       .format("DD/MM/YYYY HH:mm:ss");
//   }

//   socket.onopen = event => {
//     dispatch(ConnectionsAPI(true, true, true, ""));
//     // console.log("CONEXÃO COM O IMSDN RESTABELECIDA");
//     socket.send(
//       "REGISTER\r\n" +
//         userid +
//         "\r\nTYPE\r\n" +
//         perfilUser +
//         "\r\nCPARK\r\n" +
//         acessoFila +
//         "\r\nGRP\r\n" +
//         stringGrupoFila +
//         "&\r\nSUBSRV\r\n" +
//         stringSubMonitoria +
//         "&\r\nMOD\r\n0\r\nRECONN\r\n0\r\n\r\n"
//     );
//     // console.log("onopen\r\nREQ\r\n"+informationusers.id+"\r\nUSERNAME\r\n"+informationusers.username+"\r\nDISPLAYNAME\r\n"+informationusers.displayname+"\r\nEXTEN\r\n"+informationusers.ramal+"\r\nREASON\r\n \r\nSTATUS\r\nLV\r\nSTATUSID\r\n-1\r\nHOUR\r\n"+post+"'-00:00:00'\r\nDESCRIPTION\r\n \r\nEMAIL\r\n \r\nGROUP\r\n"+informationusers.idgroup+"\r\nDTL\r\n"+post+"\r\nGROUPNAME\r\n"+informationusers.grupo+"\r\nPSDCOUNT\r\n"+parseInt(informationusers.psdcount)+"\r\nPSDTMA\r\n"+parseInt(informationusers.psdtma)+"\r\nMNGGROUP\r\n-1\r\nINCALLCOUNT\r\n"+parseInt(informationusers.incallcount)+"\r\nINANSCOUNT\r\n"+parseInt(informationusers.inanscount)+"\r\nINTMANS\r\n"+parseInt(informationusers.intmans)+"\r\nINSLA\r\n100\r\nOUTCALLCOUNT\r\n"+parseInt(informationusers.outcallcount)+"\r\nOUTANSCOUNT\r\n"+parseInt(informationusers.outanscount)+"\r\nOUTTMANS\r\n"+parseInt(informationusers.outtmans)+"\r\nOUTSLA\r\n100\r\nTMLOGIN\r\n"+parseInt(informationusers.tmlogin)+"\r\nINITIALLOGIN\r\n1\r\n\r\n")
//     // socket.send("REQ\r\n"+informationusers.id+"\r\nUSERNAME\r\n"+informationusers.username+"\r\nDISPLAYNAME\r\n"+informationusers.displayname+"\r\nEXTEN\r\n"+informationusers.ramal+"\r\nREASON\r\n \r\nSTATUS\r\nLV\r\nSTATUSID\r\n-1\r\nHOUR\r\n"+post+"'-00:00:00'\r\nDESCRIPTION\r\n \r\nEMAIL\r\n \r\nGROUP\r\n"+informationusers.idgroup+"\r\nDTL\r\n"+post+"\r\nGROUPNAME\r\n"+informationusers.grupo+"\r\nPSDCOUNT\r\n"+parseInt(informationusers.psdcount)+"\r\nPSDTMA\r\n"+parseInt(informationusers.psdtma)+"\r\nMNGGROUP\r\n-1\r\nINCALLCOUNT\r\n"+parseInt(informationusers.incallcount)+"\r\nINANSCOUNT\r\n"+parseInt(informationusers.inanscount)+"\r\nINTMANS\r\n"+parseInt(informationusers.intmans)+"\r\nINSLA\r\n100\r\nOUTCALLCOUNT\r\n"+parseInt(informationusers.outcallcount)+"\r\nOUTANSCOUNT\r\n"+parseInt(informationusers.outanscount)+"\r\nOUTTMANS\r\n"+parseInt(informationusers.outtmans)+"\r\nOUTSLA\r\n100\r\nTMLOGIN\r\n"+parseInt(informationusers.tmlogin)+"\r\nINITIALLOGIN\r\n1\r\n\r\n");
//   };
// }
