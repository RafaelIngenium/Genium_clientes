import React, { useState } from "react";
import DashboardDetailTabBItem from "./DashboardDetailTabBItem";

const DashboardDetailTabB = () => {
  const [items, setItems] = useState(["1", "2"]);

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
        {items.map(item => (
          <DashboardDetailTabBItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardDetailTabB;
