import React from "react";
import ClientDetailsInfo from "./ClientDetailsInfo";
import ClientDetailsInteractions from "./ClientDetailsInteractions";

const ClientDetails = () => {
  return (
    <div className="client-details">
      <ClientDetailsInfo />
      <ClientDetailsInteractions />
    </div>
  );
};

export default ClientDetails;
