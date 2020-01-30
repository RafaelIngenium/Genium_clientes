import React from "react";

const TopFiveItem = ({ type }) => {
  return (
    <div className="top-five__content__item">
      <div className="user-info">
        <div className="user-info__photo">
          <img
            className="user-info__photo__img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7MB3vS-7uVvMEqlf-ExEJgJ64b0ozAA0Un8GQrbwOnZG6dZqjQ"
            alt=""
          />
        </div>
        {/* PARA USUARIOS ATIVOS */}
        {type === "user" && (
          <div className="user-info__text">
            <div className="user-info__text__title">
              <div className="user-info__text__title__name">
                {" "}
                Chris Vargas Vargas Vargas Vargas Vargas Vargas Vargas
                VargasVargasVargasVargas
              </div>

              <span>
                {/* <?php include './../build/images/webchat-icon.svg'; ?> */}
              </span>
            </div>
            <div className="user-info__text__subtitle">
              chris.vargas@mail.com
            </div>
          </div>
        )}
        {/* PATA FLUXOS */}
        {type === "flow" && (
          <div className="user-info__text">
            <div className="user-info__text__title">SAC</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopFiveItem;
