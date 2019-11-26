import React from "react";
import { ReactComponent as BookMedical } from "../../assets/images/book-medical.svg";

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
