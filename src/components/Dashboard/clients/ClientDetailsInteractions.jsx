import React from "react";
import ClientDetailsInteractionItem from "./ClientDetailsInteractionItem";
import { useSelector } from "react-redux";

var lastcontacts = []

const ClientDetailsInteractions = () => {
  const details              = useSelector(state => state.clientdetailsReducer);
  lastcontacts               = details.lastcontacts;
  return (
    <div className="client-details__interactions">
      <div className="client-details__interactions__title">
          ÚLTIMOS CONTATOS REALIZADOS
      </div>
      <div className="client-details__interactions__container">
        <div className="client-details__interactions__body">
          {lastcontacts.map(contact => (
              <ClientDetailsInteractionItem contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsInteractions;
