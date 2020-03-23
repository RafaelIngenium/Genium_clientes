import AgentActionTypes from "./agent.types";

export default function agents (state = [], action){
  switch (action.type) {
    case AgentActionTypes.ADD_INFO_AGENTS:
      return action.agents.map(agent => {
                return agent
              })
    case AgentActionTypes.REFRESH_AGENT:
      console.log(action)
        var exist = false
        state.map(agent => {
          if(agent.iduser === action.id)
              exist = true;
        })
        if(exist == true){
          return state.map(agent => {
                    if(agent.iduser === action.id){ 
                      return { ...agent, 
                        status_sip: action.status_sip, 
                        status: action.status, 
                        razao_bloqueio: action.razao_bloqueio, 
                        speaknum: action.speaknum,
                        direcao: action.direcao, 
                        time: action.time,
                        psdcount: action.psdcount,
                        psdtma: action.psdtma,
                        incallcount: action.incallcount,
                        inanscount: action.inanscount,
                        intmans: action.intmans,
                        insla: action.insla === 'Received: INFO' ? 0:action.insla,
                        outcallcount: action.outcallcount,
                        outanscount: action.outanscount,
                        outtmans: action.outtmans,
                        outsla: action.outsla,
                        tmlogin: action.tmlogin,
                        duration:action.duration,
                        mediaid:action.mediaid,
                        cdremcurso: action.cdremcurso,
                        tmpausa:parseInt(action.psdtma)>0?parseInt(action.psdtma)/parseInt(action.psdcount):0,
                        tmentrada:parseInt(action.intmans)>0?parseInt(action.intmans)/parseInt(action.inanscount):0,
                        tmsaida:parseInt(action.outtmans)>0?parseInt(action.outtmans)/parseInt(action.outanscount):0,
                        gdaagent:parseInt(action.tmlogin)>0?100-((parseInt(parseInt(action.psdtma)+parseInt(action.intmans)+parseInt(action.outtmans))/parseInt(action.tmlogin))*100):0,
                        
                        }
                    }
                    return agent
                  })
        }else{
          return [
            ...state,
            {
              
              iduser: action.id,
              status_sip: action.status_sip, 
              status: action.status, 
              razao_bloqueio: action.razao_bloqueio, 
              speaknum: action.speaknum,
              direcao: action.direcao, 
              time: action.time,
              psdcount: action.psdcount,
              psdtma: action.psdtma,
              incallcount: action.incallcount,
              inanscount: action.inanscount,
              intmans: action.intmans,
              insla: action.insla === 'Received: INFO' ? 0:action.insla,
              outcallcount: action.outcallcount,
              outanscount: action.outanscount,
              outtmans: action.outtmans,
              outsla: action.outsla,
              tmlogin: action.tmlogin,
              duration:action.duration,
              mediaid: action.mediaid,
              desc_grupo: action.desc_grupo,
              id_grupo: action.id_grupo,
              label: action.label,
              ramal: action.ramal,
              usedmodule: action.usedmodule,
              username: action.username,
              value: action.id,
              cdremcurso: action.cdremcurso,
              tmpausa:parseInt(action.psdtma)>0?parseInt(action.psdtma)/parseInt(action.psdcount):0,
              tmentrada:parseInt(action.intmans)>0?parseInt(action.intmans)/parseInt(action.inanscount):0,
              tmsaida:parseInt(action.outtmans)>0?parseInt(action.outtmans)/parseInt(action.outanscount):0,
              gdaagent:parseInt(action.tmlogin)>0?100-((parseInt(parseInt(action.psdtma)+parseInt(action.intmans)+parseInt(action.outtmans))/parseInt(action.tmlogin))*100):0,
            } 
          ]
        }
    default:
      return state
  }
}