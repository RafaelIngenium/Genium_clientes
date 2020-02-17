import React from "react";
import DashboardDetailTabSaidaItem from "./DashboardDetailTabSaidaItem";

const DashboardDetailTabSaida = () => {
  return (
    <div className="table-card table-card--flows-out active">
      <div className="table-card__header">
        <div className="table-card__item table-card__item-1">Nome</div>
        <div className="table-card__item table-card__item-2">Enviado para</div>
        <div className="table-card__item table-card__item-3">Entregue para</div>
        <div className="table-card__item table-card__item-4">
          Visualizado por
        </div>
        <div className="table-card__item table-card__item-5">Aberto por</div>
      </div>

      <div className="table-card__body">
        <DashboardDetailTabSaidaItem />
      </div>
    </div>
  );
};

export default DashboardDetailTabSaida;
