import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardDetailTabBItem from "./DashboardDetailTabBItem";

const DashboardDetailTabB = () => {
  const queueReducer = useSelector(state => state.queueReducer);

  return (
    <div className="table-card table-card--flows-out active">
      <div className="table-card__header">
        <div className="table-card__item table-card__item-1 dec">Nome</div>
        <div className="table-card__item table-card__item-2 dec">Entrou</div>
        <div className="table-card__item table-card__item-3 dec">Fluxo</div>
        <div className="table-card__item table-card__item-4 dec">Status</div>
        <div className="table-card__item table-card__item-5 dec">
          Ultima Posição
        </div>
        <div className="table-card__item table-card__item-6 dec">Tempo</div>
        <div className="table-card__item table-card__item-7 dec">Fila</div>
        <div className="table-card__item table-card__item-8 dec">Tempo</div>
      </div>

      <div className="table-card__body">
      {queueReducer.filter(item => item.status === '1' || item.status === 1).map(item => (
          <DashboardDetailTabBItem key={item}  item={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardDetailTabB;
