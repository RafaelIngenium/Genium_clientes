import React from "react";
import { ReactComponent as BookMedical } from "../../assets/images/book-medical.svg";
import { ReactComponent as ChartBar } from "../../assets/images/chart-bar.svg";
import { ReactComponent as ChartBarAlt } from "../../assets/images/chart-bar-alt.svg";
import { ReactComponent as ChartLine } from "../../assets/images/chart-line.svg";
import { ReactComponent as Dashboard } from "../../assets/images/dashboard.svg";
import { ReactComponent as ChartPie } from "../../assets/images/chart-pie.svg";
import { PopOver } from "../../utils/Typpy";

const renderPopOver = () => {
  return (
    <div class="context-menu" id="drop-change-chart">
      <div class="context-menu__list">
        <div class="card-resume__option__items">
          <div class="card-resume__option__items__item">
            <ChartBar />
            Colunas
          </div>
          <div class="card-resume__option__items__item">
            <ChartBarAlt />
            Barras
          </div>
          <div class="card-resume__option__items__item">
            <ChartLine />
            Linhas
          </div>
          <div class="card-resume__option__items__item">
            <Dashboard />
            Semi Círculo
          </div>
          <div class="card-resume__option__items__item">
            <ChartPie />
            Pizza
          </div>
        </div>
      </div>
    </div>
  );
};

const CardResume = ({ type, value, infoText }) => {
  //type = info / add
  return (
    <div
      className={
        type === "info" ? "card-resume" : "card-resume card-resume--add"
      }
    >
      {type === "info" && (
        <>
          <PopOver trigger="click" interactive={true} content={renderPopOver()}>
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
      {type === "info" && <div className="chartLine" id="a1"></div>}
    </div>
  );
};

export default CardResume;
