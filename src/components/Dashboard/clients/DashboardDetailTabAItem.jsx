import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import Moment from 'moment'
import { create_info_client } from "../../../store/clientdetails/clientdetails.action"
import TimeCounterMinute from "../../../utils/TimeCounterMinute";

var queue = []

const DashboardDetailTabAItem = (item) => {
  const dispatch           = useDispatch();
  const history            = useHistory();
  const environmentReducer = useSelector(state => state.queueReducer);

  function changeDetailsClient(queue){
      history.push("/app/dashboard/details/clients/client");  
      dispatch(create_info_client(queue)) 
  }

  queue = item.item;
  
  return (
      <span className="table-card__body__row" onClick={() => changeDetailsClient(item.item)}>
        <div className="table-card__item table-card__item-1">
          <div className="user-info">
            <div className="user-info__photo">
              <img
                className="user-info__photo__img"
                src={`https://cloud.ingweb.com.br`+queue.pathfile}
                alt=""
              />
            </div>
            <span className="socials-icons">
            {(() => {
                    switch (parseInt(queue.mediaid)) {
                      case 1:
                        return <svg xmlns="http://www.w3.org/2000/svg" width="56.783" height="56.783" viewBox="0 0 56.783 56.783"><g transform="translate(0)"><path fill="#4caf50" d="M28.4,56.783a28.141,28.141,0,0,1-15.628-4.7l-10.911,3.5L5.4,45.029A28.065,28.065,0,0,1,0,28.394,28.391,28.391,0,1,1,28.4,56.783ZM17.7,12.976A4.139,4.139,0,0,0,14.795,14l-.082.084a9.083,9.083,0,0,0-2.826,6.826c0,2.533,1.18,5.549,3.323,8.492l.05.069c.03.039.084.117.162.23l.016.024c4.029,5.827,8.988,10.173,13.962,12.236,3.836,1.586,6.483,2.325,8.33,2.325a7.648,7.648,0,0,0,1.62-.184c2.206-.475,4.891-2.1,5.565-4.006a7.118,7.118,0,0,0,.491-3.961c-.156-.268-.524-.445-1.082-.713l-.041-.019c-.144-.069-.3-.144-.467-.228-.614-.307-4.864-2.408-5.652-2.688a2.087,2.087,0,0,0-.715-.139,1.6,1.6,0,0,0-1.329.762l-.262.369a28.611,28.611,0,0,1-1.956,2.57,1.578,1.578,0,0,1-1.176.479,2.134,2.134,0,0,1-.817-.167l-.211-.085a20.856,20.856,0,0,1-6.448-4.019,25.438,25.438,0,0,1-4.6-5.724c-.479-.813-.08-1.28.305-1.732l.027-.031c.265-.338.52-.61.791-.9.15-.159.294-.312.441-.477l.046-.052a4.6,4.6,0,0,0,.874-1.246,1.74,1.74,0,0,0-.123-1.544c-.138-.289-.974-2.32-1.712-4.112l-.013-.032-.125-.3c-.271-.658-.519-1.261-.7-1.695-.552-1.3-.953-1.364-1.809-1.4-.094,0-.191-.008-.291-.014C18.157,12.987,17.939,12.976,17.7,12.976Z"/></g></svg>
                      case 2:
                        return <svg xmlns="http://www.w3.org/2000/svg" width="56.783" height="56.783" viewBox="0 0 56.783 56.783"><g transform="translate(0)"><path fill="#4caf50" d="M28.4,56.783a28.141,28.141,0,0,1-15.628-4.7l-10.911,3.5L5.4,45.029A28.065,28.065,0,0,1,0,28.394,28.391,28.391,0,1,1,28.4,56.783ZM17.7,12.976A4.139,4.139,0,0,0,14.795,14l-.082.084a9.083,9.083,0,0,0-2.826,6.826c0,2.533,1.18,5.549,3.323,8.492l.05.069c.03.039.084.117.162.23l.016.024c4.029,5.827,8.988,10.173,13.962,12.236,3.836,1.586,6.483,2.325,8.33,2.325a7.648,7.648,0,0,0,1.62-.184c2.206-.475,4.891-2.1,5.565-4.006a7.118,7.118,0,0,0,.491-3.961c-.156-.268-.524-.445-1.082-.713l-.041-.019c-.144-.069-.3-.144-.467-.228-.614-.307-4.864-2.408-5.652-2.688a2.087,2.087,0,0,0-.715-.139,1.6,1.6,0,0,0-1.329.762l-.262.369a28.611,28.611,0,0,1-1.956,2.57,1.578,1.578,0,0,1-1.176.479,2.134,2.134,0,0,1-.817-.167l-.211-.085a20.856,20.856,0,0,1-6.448-4.019,25.438,25.438,0,0,1-4.6-5.724c-.479-.813-.08-1.28.305-1.732l.027-.031c.265-.338.52-.61.791-.9.15-.159.294-.312.441-.477l.046-.052a4.6,4.6,0,0,0,.874-1.246,1.74,1.74,0,0,0-.123-1.544c-.138-.289-.974-2.32-1.712-4.112l-.013-.032-.125-.3c-.271-.658-.519-1.261-.7-1.695-.552-1.3-.953-1.364-1.809-1.4-.094,0-.191-.008-.291-.014C18.157,12.987,17.939,12.976,17.7,12.976Z"/></g></svg>
                      case 3:
                        return <svg xmlns="http://www.w3.org/2000/svg" width="56.783" height="56.783" viewBox="0 0 56.783 56.783"><g transform="translate(0)"><path fill="#4caf50" d="M28.4,56.783a28.141,28.141,0,0,1-15.628-4.7l-10.911,3.5L5.4,45.029A28.065,28.065,0,0,1,0,28.394,28.391,28.391,0,1,1,28.4,56.783ZM17.7,12.976A4.139,4.139,0,0,0,14.795,14l-.082.084a9.083,9.083,0,0,0-2.826,6.826c0,2.533,1.18,5.549,3.323,8.492l.05.069c.03.039.084.117.162.23l.016.024c4.029,5.827,8.988,10.173,13.962,12.236,3.836,1.586,6.483,2.325,8.33,2.325a7.648,7.648,0,0,0,1.62-.184c2.206-.475,4.891-2.1,5.565-4.006a7.118,7.118,0,0,0,.491-3.961c-.156-.268-.524-.445-1.082-.713l-.041-.019c-.144-.069-.3-.144-.467-.228-.614-.307-4.864-2.408-5.652-2.688a2.087,2.087,0,0,0-.715-.139,1.6,1.6,0,0,0-1.329.762l-.262.369a28.611,28.611,0,0,1-1.956,2.57,1.578,1.578,0,0,1-1.176.479,2.134,2.134,0,0,1-.817-.167l-.211-.085a20.856,20.856,0,0,1-6.448-4.019,25.438,25.438,0,0,1-4.6-5.724c-.479-.813-.08-1.28.305-1.732l.027-.031c.265-.338.52-.61.791-.9.15-.159.294-.312.441-.477l.046-.052a4.6,4.6,0,0,0,.874-1.246,1.74,1.74,0,0,0-.123-1.544c-.138-.289-.974-2.32-1.712-4.112l-.013-.032-.125-.3c-.271-.658-.519-1.261-.7-1.695-.552-1.3-.953-1.364-1.809-1.4-.094,0-.191-.008-.291-.014C18.157,12.987,17.939,12.976,17.7,12.976Z"/></g></svg>
                      case 4:
                        return <svg xmlns="http://www.w3.org/2000/svg" width="56.872" height="56.877" viewBox="0 0 56.872 56.877"><g transform="translate(0 0)"><path fill="#2196f3" d="M28.461.006A27.893,27.893,0,0,0,.025,27.257,26.737,26.737,0,0,0,9.5,47.541v8.152a1.185,1.185,0,0,0,1.813,1l6.6-4.126a29.34,29.34,0,0,0,10.54,1.936A27.893,27.893,0,0,0,56.9,27.257,27.893,27.893,0,0,0,28.461.006Z" transform="translate(-0.025 0)"></path><path fill="#fafafa" d="M123.049,171.171a1.185,1.185,0,0,0-1.517-.332l-12.322,6.718-7.666-6.574a1.185,1.185,0,0,0-1.609.062L85.717,185.263a1.185,1.185,0,0,0,1.405,1.877l12.322-6.718L107.117,187a1.185,1.185,0,0,0,1.609-.062l14.218-14.218A1.185,1.185,0,0,0,123.049,171.171Z" transform="translate(-75.892 -151.734)"></path></g></svg>
                      case 5:
                        return <svg xmlns="http://www.w3.org/2000/svg" width="56.783" height="56.783" viewBox="0 0 56.783 56.783"><g transform="translate(0)"><path fill="#4caf50" d="M28.4,56.783a28.141,28.141,0,0,1-15.628-4.7l-10.911,3.5L5.4,45.029A28.065,28.065,0,0,1,0,28.394,28.391,28.391,0,1,1,28.4,56.783ZM17.7,12.976A4.139,4.139,0,0,0,14.795,14l-.082.084a9.083,9.083,0,0,0-2.826,6.826c0,2.533,1.18,5.549,3.323,8.492l.05.069c.03.039.084.117.162.23l.016.024c4.029,5.827,8.988,10.173,13.962,12.236,3.836,1.586,6.483,2.325,8.33,2.325a7.648,7.648,0,0,0,1.62-.184c2.206-.475,4.891-2.1,5.565-4.006a7.118,7.118,0,0,0,.491-3.961c-.156-.268-.524-.445-1.082-.713l-.041-.019c-.144-.069-.3-.144-.467-.228-.614-.307-4.864-2.408-5.652-2.688a2.087,2.087,0,0,0-.715-.139,1.6,1.6,0,0,0-1.329.762l-.262.369a28.611,28.611,0,0,1-1.956,2.57,1.578,1.578,0,0,1-1.176.479,2.134,2.134,0,0,1-.817-.167l-.211-.085a20.856,20.856,0,0,1-6.448-4.019,25.438,25.438,0,0,1-4.6-5.724c-.479-.813-.08-1.28.305-1.732l.027-.031c.265-.338.52-.61.791-.9.15-.159.294-.312.441-.477l.046-.052a4.6,4.6,0,0,0,.874-1.246,1.74,1.74,0,0,0-.123-1.544c-.138-.289-.974-2.32-1.712-4.112l-.013-.032-.125-.3c-.271-.658-.519-1.261-.7-1.695-.552-1.3-.953-1.364-1.809-1.4-.094,0-.191-.008-.291-.014C18.157,12.987,17.939,12.976,17.7,12.976Z"/></g></svg>
                      default:
                        break;
                    }
              })()}
            </span>
            <div className="user-info__text">
              <div className="user-info__text__title">
              {(() => {
                    if (queue.contactname) {
                      if (queue.contactname !== " ") {
                        var mensagem_tratada = queue.contactname;
                        let valor = 1
                        try{
                        mensagem_tratada = '{"'+valor+'": [{"mensagem_tratada":"'+mensagem_tratada+'"}]}';
                        var obj = JSON.parse(mensagem_tratada);
                        mensagem_tratada = obj[1][0].mensagem_tratada
                        } catch(e){
                          mensagem_tratada = queue.contactname; 
                        }
                        return <div className="user-info__text__title__name">{mensagem_tratada}</div>
                      } else {
                        return <div className="user-info__text__title__name">{_.upperFirst(queue.caller)}</div>
                      }
                    } else {
                      return <div className="user-info__text__title__name">{_.upperFirst(queue.caller)}</div>
                    }
                  })()}
              </div>
              <div className="user-info__text__subtitle">
                {/* mateus.souza@mail.com */}
              </div>
            </div>
          </div>
        </div>
        <div className="table-card__item table-card__item-2">
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
          {/* <!-- <div className="table-card__item__media">
                            <div className="table-card__item__media__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56.783" height="56.783" viewBox="0 0 56.783 56.783"><g transform="translate(0)"><path fill="#4caf50" d="M28.4,56.783a28.141,28.141,0,0,1-15.628-4.7l-10.911,3.5L5.4,45.029A28.065,28.065,0,0,1,0,28.394,28.391,28.391,0,1,1,28.4,56.783ZM17.7,12.976A4.139,4.139,0,0,0,14.795,14l-.082.084a9.083,9.083,0,0,0-2.826,6.826c0,2.533,1.18,5.549,3.323,8.492l.05.069c.03.039.084.117.162.23l.016.024c4.029,5.827,8.988,10.173,13.962,12.236,3.836,1.586,6.483,2.325,8.33,2.325a7.648,7.648,0,0,0,1.62-.184c2.206-.475,4.891-2.1,5.565-4.006a7.118,7.118,0,0,0,.491-3.961c-.156-.268-.524-.445-1.082-.713l-.041-.019c-.144-.069-.3-.144-.467-.228-.614-.307-4.864-2.408-5.652-2.688a2.087,2.087,0,0,0-.715-.139,1.6,1.6,0,0,0-1.329.762l-.262.369a28.611,28.611,0,0,1-1.956,2.57,1.578,1.578,0,0,1-1.176.479,2.134,2.134,0,0,1-.817-.167l-.211-.085a20.856,20.856,0,0,1-6.448-4.019,25.438,25.438,0,0,1-4.6-5.724c-.479-.813-.08-1.28.305-1.732l.027-.031c.265-.338.52-.61.791-.9.15-.159.294-.312.441-.477l.046-.052a4.6,4.6,0,0,0,.874-1.246,1.74,1.74,0,0,0-.123-1.544c-.138-.289-.974-2.32-1.712-4.112l-.013-.032-.125-.3c-.271-.658-.519-1.261-.7-1.695-.552-1.3-.953-1.364-1.809-1.4-.094,0-.191-.008-.291-.014C18.157,12.987,17.939,12.976,17.7,12.976Z"/></g></svg>
                            </div>
                            <div className="table-card__item__media__text">
                                Whatsapp
                            </div>
                        </div> --> */}
        </div>
        <div className="table-card__item table-card__item-3">
          {
            (() => {
                    var fluxo = queue.called.split("-");
                        fluxo = fluxo[1];
                        return fluxo;
            })()
          }
        </div>
        <div className="table-card__item table-card__item-4">
          {
            (() => {
                    var fluxo = queue.called.split("-");
                        fluxo = fluxo[1];
                        return fluxo;
            })()
          }
        </div>
        <div className="table-card__item table-card__item-5">00:00:00</div>
        <div className="table-card__item table-card__item-6">Fila</div>
        <div className="table-card__item table-card__item-7">
        {(() => {
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
                    return <TimeCounterMinute
                              horario={duracao < 0 ? 0 : parseInt(duracao)}
                              key={queue.queueid}
                            />;
        })()}
        </div>
        <div className="table-card__item table-card__item-8">Fila</div>
        <div className="table-card__item table-card__item-9">
          
        </div>
        <div className="table-card__item table-card__item-10">00:00:00</div>
      </span>
  );
};

export default DashboardDetailTabAItem;
