import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"
import SearchBar from "../misc/SearchBar";
import CardResume from "../misc/CardResume";
import TopFiveContainer from "../misc/TopFiveContainer";
import ChartComponent from "../misc/ChartComponent";
import TimeFormat from "hh-mm-ss"

const DashboardComponent = () => {
  const location = useLocation();
  const servicegroupReducer     = useSelector(state => state.servicegroupReducer);
  const supervisiongroupReducer = useSelector(state => state.supervisiongroupReducer);
  const queueReducer            = useSelector(state => state.queueReducer);
  //ComponenntDidMount
  useEffect(() => {}, []);

  const [graphType, setGraphType] = useState("line");
  const [graphOptions, setGraphOptions] = useState({
    chart: {
      shadow: {
        enabled: false,
        color: "#bbb",
        top: 3,
        left: 2,
        blur: 3,
        opacity: 1
      },

      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    stroke: {
      width: 2,
      curve: "smooth",
      colors: ["#455CC7"]
    },
    xaxis: {
      type: "datetime",
      categories: [
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001"
      ],
      labels: {
        show: true,
        style: {
          color: "#7E8190",
          fontSize: "16px",
          fontFamily: "Inter Regular",
          cssClass: "apexcharts-yaxis-label"
        }
      },

      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    },
    grid: {
      borderColor: "#EBEDF4"
    },
    markers: {
      size: 0,
      colors: ["#FFF"],
      strokeColors: "#455CC7",
      strokeWidth: 4,
      strokeOpacity: 0.9,
      fillOpacity: 1,
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      hover: {
        sizeOffset: 12
      }
    },

    yaxis: {
      min: 0,
      max: 10,

      labels: {
        show: true,
        style: {
          color: "#7E8190",
          fontSize: "12px",
          fontFamily: "Inter Regular",
          cssClass: "apexcharts-yaxis-label"
        }
      }
    }
  });
  const [graphSeries, setGraphSeries] = useState([
    {
      name: "Tarefa",
      data: [1, 8, 2, 9, 3, 8, 4, 9, 5, 8]
    }
  ]);

  let desempenhoRec        = 0;
  let desempenhoAtd        = 0;
  let desempenhoAtdSLA     = 0;
  let desempenhotmatd      = 0;
  let desempenhoAbdn       = 0;
  let desempenhoGeral      = 0;
  let resultadoTMA         = 0;
  let resultadoTMASub      = 0;
  let resultadoTMABNSub    = 0;
  let resultadoTMEA        = 0;
  let resultadoMTEA        = 0;
  let resultadoTMEASub     = 0;
  let resultadoTMABN       = 0;
  let resultadoMTEASub     = 0;
  let desempenhoTMAAbdn    = 0;
  let desempenhoCurtas     = 0;
  let desempenhoFila       = 0;
  let desempenhoTMEA       = 0;
  let desempenhoMTEA       = 0;
  let desempenhoTransf     = 0;
  let maxcallqueue         = 0;
  let checkSLA             = false;
  let valorSLA             = 0;
  let arrayGrupo           = [];
  let maxcallqueueDate     = 0;
  let cdrmaxcallqueue      = null;
  let totalFila            = 0;
  
  return (
    <React.Fragment>
      <div className="main__body">
        <div className="dash-performance">
          <div className="card-performance">
            <div className="card-performance__header">
              <div className="card-performance__header__title">
                TAREFAS PERFORMADAS
              </div>
              <div className="card-performance__header__date-picker">
                <SearchBar />
              </div>
            </div>

            <div className="card-performance__chart">
              {/* <div id="chart"></div> */}
              <ChartComponent
                chartHeight="315"
                graphType={graphType}
                graphOptions={graphOptions}
                graphSeries={graphSeries}
                classes=""
              />
            </div>
          </div>
          { supervisiongroupReducer.map(group => (
                (() => { 
                  if(checkSLA===false){
                    valorSLA = group.slaatd
                    checkSLA=true;
                  }
                                              
                { servicegroupReducer.map(srvgrp => (
                          (() => { 
                                    if(parseInt(group.idsubservico)==parseInt(srvgrp.srvin)){ 
                                        
                                        arrayGrupo = [] ;
                                        desempenhoRec     = parseInt(srvgrp.callcount)+parseInt(desempenhoRec);
                                        desempenhoAtd     = parseInt(srvgrp.atdcount)+parseInt(desempenhoAtd);
                                        desempenhoAtdSLA  = parseInt(srvgrp.atdslacount)+parseInt(desempenhoAtdSLA);
                                        desempenhotmatd   = parseInt(srvgrp.tmatd)+parseInt(desempenhotmatd);
                                        desempenhoAbdn    = parseInt(srvgrp.abncount)+parseInt(desempenhoAbdn);
                                        desempenhoTMAAbdn = parseInt(srvgrp.tmabn)+parseInt(desempenhoTMAAbdn);
                                        desempenhoCurtas  = parseInt(srvgrp.abnslacount)+parseInt(desempenhoCurtas);
                                        desempenhoTMEA    = parseInt(srvgrp.tmansqueue)+parseInt(desempenhoTMEA);
                                        desempenhoTransf  = parseInt(srvgrp.transfercount)+parseInt(desempenhoTransf);
                                        desempenhoFila    = parseInt(srvgrp.queueanscount)+parseInt(desempenhoFila); 
                                        desempenhoMTEA    = desempenhoMTEA > parseInt(srvgrp.mte) ? parseInt(desempenhoMTEA) : parseInt(srvgrp.mte);

                                        
                                        if((parseInt(srvgrp.nextcallqueue)>maxcallqueue)&&(parseInt(srvgrp.nextcallqueue)>0)) {
                                        
                                          maxcallqueue = parseInt(srvgrp.nextcallqueue);
                                          cdrmaxcallqueue = parseInt(srvgrp.cdrnextcallqueue);
                                          maxcallqueueDate = srvgrp.datemaxqueue;
                                          console.log("srvgrp.datemaxqueue : ",srvgrp.datemaxqueue)

                                        
                                        }                                        
                                    }

                              }
                          )()
                        ))
                    }
              })()
              ))
            }

          { 
            (() => { 
                desempenhoGeral = desempenhoAtdSLA > 0 ?  ((parseInt(desempenhoAtdSLA)/((parseInt(desempenhoRec))-(desempenhoAbdn-desempenhoCurtas)))*100) : 0;
                desempenhoGeral = valorSLA>0 ? (desempenhoGeral / (valorSLA/100)) : desempenhoGeral;
                desempenhoGeral = desempenhoGeral>100 ? 100 : desempenhoGeral;
                resultadoTMA    = (TimeFormat.fromS(desempenhoAtd>0?(parseInt(desempenhotmatd)/parseInt(desempenhoAtd).toFixed(0)):0, 'hh:mm:ss')).split(".")
                resultadoTMABN  = (TimeFormat.fromS(desempenhoAbdn>0?(parseInt(desempenhoTMAAbdn)/parseInt(desempenhoAbdn).toFixed(0)):0, 'hh:mm:ss')).split(".")
                resultadoTMEA   = (TimeFormat.fromS(desempenhoFila>0?(parseInt(desempenhoTMEA)/parseInt(desempenhoFila).toFixed(0)):0, 'hh:mm:ss')).split(".")
                resultadoMTEA   = (TimeFormat.fromS(desempenhoAtd>0?(parseInt(desempenhoMTEA)):0,'hh:mm:ss')).split(".")
                totalFila       = queueReducer.filter(queue => queue.status === '1' || queue.status === 1);
                totalFila       = totalFila.length;
              }
              )()
          }
          <div className="resume-performace">
            <CardResume
              type="add"
              value={desempenhoGeral.toFixed(2)+'%'}
              infoText="Nível de serviço"
            />
            <Link to={`${location.pathname}/details`}>
              <CardResume
                type="add"
                value={totalFila}
                infoText="Clientes em fila"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-row">
        <div className="dash-resume-content">
            <CardResume
              type="add"
              value="130"
              infoText="Clientes recebidos"
            />
          <CardResume type="add" value="130" infoText="Clientes atendidos" />

          <CardResume type="add" value="130" infoText="Tempo médio de atendimento" />
          <CardResume type="add" value="130" infoText="Clientes abandonados" />
          <CardResume type="add" value="130" infoText="Tempo médio de abandono" />
          <CardResume type="add" value="130" infoText="Tempo médio de espera para atendimento" />
          <CardResume type="add" value="130" infoText="Tempo médio de espera para atendimento" />
          {/* <CardResume type="info" value="130" infoText="Tempo médio de espera para atendimento" /> */}

          <CardResume type="add" value="133" infoText="Maior tempo de espera para atendimento" />
          <CardResume type="add" value="133" infoText="Clientes transferidos" />
          <CardResume type="add" value="" infoText="Adicionar Parâmetro" />
        </div>

        <div className="dash-topfive-content">
          <TopFiveContainer label="TOP 5 USUÁRIOS ATIVOS" type="user" />

          <TopFiveContainer label="TOP 5 FLUXOS" type="flow" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardComponent;
