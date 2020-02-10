import React, { useState } from "react";
import DashboardDetailTabEntrada from "./DashboardDetailTabEntrada";
import DashboardDetailTabSaida from "./DashboardDetailTabSaida";
import DashboardRadio from "../DashboardRadio";

const DashboardDetailsFlow = () => {
  const [checked, setChecked] = useState("radio-1");

  const handleActiveRadio = radioId => {
    setChecked(radioId);
  };

  return (
    <React.Fragment>
      <DashboardRadio
        radioOneLabel="Entrada"
        radioTwoLabel="Saída"
        activeRadio={handleActiveRadio}
      />
      {/* TABLES */}
      {checked === "radio-1" && <DashboardDetailTabEntrada />}
      {checked === "radio-2" && <DashboardDetailTabSaida />}
    </React.Fragment>
  );
};

export default DashboardDetailsFlow;
