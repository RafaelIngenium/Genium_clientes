import React, { useState } from "react";
import DashboardDetailTabA from "./DashboardDetailTabA";
import DashboardDetailTabB from "./DashboardDetailTabB";
import DashboardRadio from "../DashboardRadio";

const DashboardDetailsClient = () => {
  const [checked, setChecked] = useState("radio-1");

  const handleActiveRadio = radioId => {
    setChecked(radioId);
  };

  return (
    <React.Fragment>
      <DashboardRadio
        radioOneLabel="Tabela - A"
        radioTwoLabel="Tabela - B"
        activeRadio={handleActiveRadio}
      />
      {/* TABLES */}
      {checked === "radio-1" && <DashboardDetailTabA />}
      {checked === "radio-2" && <DashboardDetailTabB />}
    </React.Fragment>
  );
};

export default DashboardDetailsClient;
