import AgentActionTypes from "./agent.types";
import { api } from "../../services/api";

export const get_info_agents = (userid) => {
  return (dispatch) => {
      return api.get(`/agents?id=${userid}`)
      .then(response => {
          dispatch(create_info_agents(response.data))
      })
      .catch(error => {
          console.log(error)
      });
  };
}

export const create_info_agents = (agents) => ({ type: AgentActionTypes.ADD_INFO_AGENTS, agents })
export const refresh_agent = (id,status_sip,status, razao_bloqueio, speaknum, direcao, time,psdcount,psdtma,incallcount,inanscount,intmans,insla,outcallcount,outanscount,outtmans,outsla,tmlogin,duration,mediaid,desc_grupo,id_grupo,username,label,ramal,usedmodule,cdremcurso) => ({ type: AgentActionTypes.REFRESH_AGENT, id, status_sip, status, razao_bloqueio, speaknum, direcao, time,psdcount,psdtma,incallcount,inanscount,intmans,insla,outcallcount,outanscount,outtmans,outsla,tmlogin,duration,mediaid,desc_grupo,id_grupo,username,label,ramal,usedmodule,cdremcurso})
