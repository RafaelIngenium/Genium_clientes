import React from "react";
import ClientDetailsInteractionItem from "./ClientDetailsInteractionItem";

const ClientDetailsInteractions = () => {
  return (
    <div className="client-details__interactions">
      <div className="client-details__interactions__title">
        CONTATOS DOS ÚLTIMOS 7 DIAS
      </div>
      <div className="client-details__interactions__container">
        <div className="client-details__interactions__body">
          <ClientDetailsInteractionItem channel="whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsInteractions;
