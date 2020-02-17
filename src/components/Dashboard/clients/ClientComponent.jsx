import React from "react";
import ClientDetails from "./ClientDetails";
import ClientChat from "./ClientChat";

const ClientComponent = () => {
  return (
    <div className="main__body">
      <div className="client-details-container">
        <ClientDetails />
        <ClientChat />
      </div>
    </div>
  );
};

export default ClientComponent;
