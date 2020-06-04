import React from "react";

const DashboardDetailTabEntradaItem = ({flow}) => {
  return (
    <div className="table-card__body__row">
      <div className="table-card__item table-card__item-1">
        <a href="#" className="user-info">
          <div className="user-info__photo">
            <img
              className="user-info__photo__img"
              src="https://media.sproutsocial.com/uploads/2016/08/Facebook-Messenger-Bot-01.png"
              alt=""
            />
          </div>
          <div className="user-info__text">
            <div className="user-info__text__title">{flow.name}</div>
          </div>
        </a>
      </div>
      <div className="table-card__item table-card__item-2">{flow.qtde}</div>
      <div className="table-card__item table-card__item-3">0</div>
      <div className="table-card__item table-card__item-4">0</div>
      <div className="table-card__item table-card__item-5">0</div>
      <div className="table-card__item table-card__item-6">0</div>
    </div>
  );
};

export default DashboardDetailTabEntradaItem;
