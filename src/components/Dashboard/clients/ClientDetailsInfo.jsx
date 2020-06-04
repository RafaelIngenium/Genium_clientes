import React from "react";
import MediaItem from "../../misc/MediaItem";
import { useSelector } from "react-redux";
import TimeCounterMinute from "../../../utils/TimeCounterMinute";
import CLIENTDEFAULT from "../../../build/images/default.png";
import Moment from 'moment'
import { RequestCallParkSocket } from '../../../services/imsdn'

const ClientDetailsInfo = () => {
  const queue              = useSelector(state => state.clientdetailsReducer);
  const environmentReducer = useSelector(state => state.queueReducer);
  const infousers          = useSelector(state => state.userReducer);

  const answerCall = (texto) => { 
    RequestCallParkSocket(infousers.user,'1',queue.cdrid,queue.mediaid)
  }

  return (
    <div className="client-details__info">
      <div className="client-details__info__header">
        <a href="#" className="user-info user-info--full">
          <div className="user-info__photo">
             <img
                className="user-info__photo__img"
                src={queue.pathfile === null ? CLIENTDEFAULT:`https://cloud.ingweb.com.br`+queue.pathfile}
                alt=""
              />
          </div>
          <div className="user-info__text user-info__text">
            <div className="user-info__text__title">
              <div className="user-info__text__title__name">
                  {queue.contactname}
              </div>
            </div>
            <div className="user-info__text__subtitle">
                  {queue.caller}
            </div>
          </div>
        </a>
        {
          (() => {
                    if(queue.answer === true){
                      return (
                              <button className="btn-outlined btn-outlined--primary">
                                 Mover para fila
                             </button>
                            );
                    }else if(queue.status !== '0'){
                      return (
                              <button disabled className="btn-outlined btn-outlined--primary" onClick={answerCall}>
                                Atender
                              </button>
                            );
                    }else{
                      return (
                              <button className="btn-outlined btn-outlined--primary" onClick={answerCall}>
                                Contactar
                              </button>
                      );
                    }
          })()
        }
      </div>

      <div className="client-details__info__resume">
        <div className="client-details__info__resume-1">
          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">Canal:</div>
            <div className="client-details__info__resume__description">
              {(() => {
                    switch (parseInt(queue.mediaid)) {
                      case 1:
                        return <MediaItem mediaType="voice" mediaValue="voice" />
                      case 2:
                        return <MediaItem mediaType="webchat" mediaValue="webchat" />
                      case 3:
                        return <MediaItem mediaType="whatsapp" mediaValue="whatsapp" />
                      case 4:
                        return <MediaItem mediaType="messenger" mediaValue="messenger" />
                      case 5:
                        return <MediaItem mediaType="whatsapp" mediaValue="whatsapp" />
                      default:
                        break;
                    }
              })()}
            </div>
          </div>

          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">Entrou:</div>
            <div className="client-details__info__resume__description">
            {
              (() => {
                      var data = Moment(queue.to_char,"DD/MM/YYYY HH:mm:ss").format("DD/MM/YYYY");
                      var hora = Moment(queue.to_char,"DD/MM/YYYY HH:mm:ss").format("HH:mm:ss");
                      var now  = Moment().format('DD/MM/YYYY')


                        if(data === now)
                          data = 'Hoje,'
                        return data+' '+hora;
              })()
            }
            </div>
          </div>

          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">Fila:</div>
            <div className="client-details__info__resume__description">
             {(() => {
                                if(queue.status === '1'){
                                  var now;
                                  var antes;
                                  var duracao = 0;
                                  var checkItem = false;

                                  if (environmentReducer.diff_time < 0) {
                                    antes = Moment(queue.to_char, "DD/MM/YYYY HH:mm:ss").format(
                                      "YYYY/MM/DD HH:mm:ss"
                                    );
                                    now = Moment()
                                      .add(Math.round(environmentReducer.diff_time), "seconds")
                                      .format("YYYY/MM/DD HH:mm:ss");
                                    duracao = Moment(now).diff(antes, "seconds");
                                    checkItem = true;
                                  } else {
                                    antes = Moment(queue.to_char, "DD/MM/YYYY HH:mm:ss").format(
                                      "YYYY/MM/DD HH:mm:ss"
                                    );
                                    now = Moment()
                                      .subtract(Math.round(environmentReducer.difftime), "seconds")
                                      .format("YYYY/MM/DD HH:mm:ss");
                                    duracao = Moment(now).diff(antes, "seconds");
                                    checkItem = true;
                                  }
                                  return  (
                                          <>
                                            Fila, <TimeCounterMinute horario={duracao < 0 ? 0 : parseInt(duracao)} key={queue.queueid} /> 
                                          </>
                                  );
                                }else{
                                  return  'Em Callback'
                                }
                    })()}
            </div>
          </div>
        </div>
        <div className="client-details__info__resume-2">
          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">Status:</div>
            <div className="client-details__info__resume__description">
              {queue.status === '1' ? 'Aguardando atendimento...': 'Aguardando retorno...'}
            </div>
          </div>

          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">Fluxo:</div>
            <div className="client-details__info__resume__description">
            {
              (() => {
                      var fluxo = queue.called.split("-");
                          fluxo = fluxo[1];
                          return fluxo;
              })()
            }
            </div>
          </div>

          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">
              Contato anterior:
            </div>
            <div className="client-details__info__resume__description">
              {queue.lastcontact}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsInfo;
