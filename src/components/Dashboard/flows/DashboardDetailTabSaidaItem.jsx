import React from "react";

const DashboardDetailTabSaidaItem = () => {
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
            <div className="user-info__text__title">Vendas</div>
          </div>
        </a>
      </div>
      <div className="table-card__item table-card__item-2">300</div>
      <div className="table-card__item table-card__item-3">290</div>
      <div className="table-card__item table-card__item-4">200</div>
      <div className="table-card__item table-card__item-5">180</div>
    </div>
  );
};

export default DashboardDetailTabSaidaItem;
