import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../misc/SearchBar";
import CardResume from "../misc/CardResume";
import TopFiveContainer from "../misc/TopFiveContainer";
import ChartComponent from "../misc/ChartComponent";

const DashboardComponent = () => {
  const location = useLocation();
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
          <div className="resume-performace">
            <CardResume
              type="add"
              value="1.4"
              infoText="Atendimentos Concluidos"
            />
            <CardResume
              type="add"
              value="1.2"
              infoText="Atendimentos Resolvidos"
            />
          </div>
        </div>
      </div>

      <div className="flex-row">
        <div className="dash-resume-content">
          <Link to={`${location.pathname}/details`}>
            <CardResume
              type="add"
              value="130"
              infoText="Atendimentos em curso"
            />
          </Link>
          <CardResume type="info" value="130" infoText="BOT Info" />

          {/* <CardResume type="info" value="130" infoText="BOT Info" />
          <CardResume type="info" value="130" infoText="BOT Info" />
          <CardResume type="info" value="130" infoText="BOT Info" />
          <CardResume type="info" value="130" infoText="BOT Info" /> */}

          <CardResume type="add" value="" infoText="Adicionar parâmetro" />
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
