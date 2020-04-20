import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardDetailTabAItem from "./DashboardDetailTabAItem";

const DashboardDetailTabA = () => {
  const queueReducer = useSelector(state => state.queueReducer);

  return (
    <div className="table-card table-card--flows-in active">
      <div className="table-card__header">
        <div className="table-card__item table-card__item-1 cres">Nome</div>
        <div className="table-card__item table-card__item-2 dec">Entrou</div>
        <div className="table-card__item table-card__item-3 cres">Fluxo</div>
        <div className="table-card__item table-card__item-4 dec">
          Última Posição
        </div>
        <div className="table-card__item table-card__item-5 dec">Tempo</div>
        <div className="table-card__item table-card__item-6 cres">Fila</div>
        <div className="table-card__item table-card__item-7 dec">Tempo</div>
        <div className="table-card__item table-card__item-8 cres">Status</div>
        <div className="table-card__item table-card__item-9 dec">Atendente</div>
        <div className="table-card__item table-card__item-10 cres">Tempo</div>
      </div>

      <div className="table-card__body">
        {queueReducer.map(item => (
          <DashboardDetailTabAItem key={item} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default DashboardDetailTabA;
