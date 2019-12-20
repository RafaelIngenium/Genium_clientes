import React, { useState } from "react";
import { ReactComponent as BookMedical } from "../../assets/images/book-medical.svg";
import { ReactComponent as ChartBar } from "../../assets/images/chart-bar.svg";
import { ReactComponent as ChartBarAlt } from "../../assets/images/chart-bar-alt.svg";
import { ReactComponent as ChartLine } from "../../assets/images/chart-line.svg";
import { ReactComponent as Dashboard } from "../../assets/images/dashboard.svg";
import { ReactComponent as ChartPie } from "../../assets/images/chart-pie.svg";
import { PopOver } from "../../utils/Typpy";
import ChartComponent from "./ChartComponent";

const CardResume = ({ type, value, infoText }) => {
  const [graphType, setGraphType] = useState("line");

  const changeGraphType = graphType => {
    switch (graphType) {
      case "line":
        setGraphType("line");
        break;
      case "bar":
        setGraphType("bar");
        break;
      default:
        break;
    }
  };

  const [graphOptions, setGraphOptions] = useState({
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    markers: {
      size: 0,
      colors: ["#FFF"],
      strokeColors: "#455CC7",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      fillOpacity: 1,
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      hover: {
        sizeOffset: 5
      }
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
        style: {
          color: "#7E8190",
          fontSize: "12px",
          fontFamily: "Inter Regular",
          cssClass: "apexcharts-yaxis-label"
        }
      }
    },

    grid: {
      borderColor: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
      curve: "smooth",
      colors: ["#455CC7"]
    },
    fill: {
      type: ["gradient", "solid"],
      opacity: 1,
      colors: ["#455CC7"]
    },
    xaxis: {
      labels: { show: false },
      show: false,
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00"
      ]
    },

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    }
  });

  const [graphSeries, setGraphSeries] = useState([
    {
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ]);

  const renderPopOver = () => {
    return (
      <div className="context-menu" id="drop-change-chart">
        <div className="context-menu__list">
          <div className="card-resume__option__items">
            <div
              className="card-resume__option__items__item"
              onClick={() => changeGraphType("column")}
            >
              <ChartBar />
              Colunas
            </div>
            <div
              className="card-resume__option__items__item"
              onClick={() => changeGraphType("bar")}
            >
              <ChartBarAlt />
              Barras
            </div>
            <div
              className="card-resume__option__items__item"
              onClick={() => changeGraphType("line")}
            >
              <ChartLine />
              Linhas
            </div>
            <div
              className="card-resume__option__items__item"
              onClick={() => changeGraphType("donut")}
            >
              <Dashboard />
              Semi Círculo
            </div>
            <div
              className="card-resume__option__items__item"
              onClick={() => changeGraphType("pie")}
            >
              <ChartPie />
              Pizza
            </div>
          </div>
        </div>
      </div>
    );
  };
  //type = info / add
  return (
    <div
      className={
        type === "info" ? "card-resume" : "card-resume card-resume--add"
      }
    >
      {type === "info" && (
        <>
          <PopOver
            trigger="click"
            placement="right"
            interactive={true}
            content={renderPopOver()}
          >
            <div className="card-resume__option">
              <i
                className="material-icons tippy-context-menu opt"
                data-tippy-placement="right"
                data-template="drop-change-chart"
              >
                more_vert
              </i>
              {/* <div className="none"> <?php include('components/inc/drop-change-chart.php'); ?></div> */}
            </div>
          </PopOver>
          <div className="card-resume__close">
            <i
              className="material-icons tippy-default"
              data-tippy-content="Fechar"
            >
              close
            </i>
          </div>
        </>
      )}

      <div className="card-resume__content">
        {value !== "" ? (
          <div className="card-resume__content__title">{value}</div>
        ) : (
          <div className="card-resume__content__icon">
            <BookMedical />
          </div>
        )}
        <div className="card-resume__content__text">{infoText}</div>
      </div>
      {/* //Render graph */}
      {type === "info" && (
        <ChartComponent
          chartHeight="100"
          graphType={graphType}
          graphOptions={graphOptions}
          graphSeries={graphSeries}
          classes="chartLine g1 active"
        />
      )}
    </div>
  );
};

export default CardResume;
