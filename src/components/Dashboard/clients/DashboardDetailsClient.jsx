import React, { useState } from "react";
import DashboardDetailTabA from "./DashboardDetailTabA";
import DashboardDetailTabB from "./DashboardDetailTabB";

const DashboardDetailsClient = () => {
  const [checked, setChecked] = useState("radio-1");

  const handleRadioChange = ({ target }) => {
    setChecked(target.id);
  };

  return (
    <React.Fragment>
      <div className="radio-group-row">
        <div className="radio-content radio-content--row">
          <div className="radio-button margin">
            <input
              type="radio"
              id="radio-1"
              name="radio"
              value="radio-1"
              checked={"radio-1" === checked}
              onChange={handleRadioChange}
            />

            <label htmlFor="radio-1">
              <span>
                <div className="mask"></div>
              </span>

              <div className="text">Tabela - A</div>
            </label>
          </div>

          <div className="radio-button">
            <input
              type="radio"
              id="radio-2"
              name="radio"
              value="radio-2"
              checked={"radio-2" === checked}
              onChange={handleRadioChange}
            />
            <label htmlFor="radio-2">
              <span>
                <div className="mask"></div>
              </span>

              <div className="text">Tabela - B</div>
            </label>
          </div>
        </div>
      </div>
      {/* TABLES */}
      {checked === "radio-1" && <DashboardDetailTabA />}
      {checked === "radio-2" && <DashboardDetailTabB />}
    </React.Fragment>
  );
};

export default DashboardDetailsClient;
