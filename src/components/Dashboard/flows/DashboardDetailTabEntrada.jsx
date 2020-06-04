import React from "react";
import DashboardDetailTabEntradaItem from "./DashboardDetailTabEntradaItem";
import { useSelector } from "react-redux";

const DashboardDetailTabEntrada = () => {
  const flows                           = useSelector(state => state.topfiveflowReducer);

  return (
    <div className="table-card table-card--flows-in active">
      <div className="table-card__header">
        <div className="table-card__item table-card__item-1">Nome</div>
        <div className="table-card__item table-card__item-2">recebidas</div>
        <div className="table-card__item table-card__item-3">atendidas bot</div>
        <div className="table-card__item table-card__item-4">
          resolvidas bot
        </div>
        <div className="table-card__item table-card__item-5">enviadas pa</div>
        <div className="table-card__item table-card__item-6">atendidas pa</div>
      </div>

      <div className="table-card__body">
          {flows.map(flow => (
            <DashboardDetailTabEntradaItem  flow={flow} />
          ))}
      </div>
    </div>
  );
};

export default DashboardDetailTabEntrada;
