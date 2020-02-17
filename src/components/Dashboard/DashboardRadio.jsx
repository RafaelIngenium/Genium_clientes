import React, { useState, useEffect } from "react";

const DashboardRadio = ({ radioOneLabel, radioTwoLabel, activeRadio }) => {
  const [checked, setChecked] = useState("radio-1");

  useEffect(() => {
    //emit chacked radio to the parent component
    activeRadio(checked);
  }, [checked]);

  return (
    <div className="radio-group-row">
      <div className="radio-content radio-content--row">
        <div className="radio-button margin">
          <input
            type="radio"
            id="radio-1"
            name="radio"
            value="radio-1"
            checked={"radio-1" === checked}
            onChange={({ target }) => setChecked(target.id)}
          />

          <label htmlFor="radio-1">
            <span>
              <div className="mask"></div>
            </span>

            <div className="text">{radioOneLabel}</div>
          </label>
        </div>

        <div className="radio-button">
          <input
            type="radio"
            id="radio-2"
            name="radio"
            value="radio-2"
            checked={"radio-2" === checked}
            onChange={({ target }) => setChecked(target.id)}
          />
          <label htmlFor="radio-2">
            <span>
              <div className="mask"></div>
            </span>

            <div className="text">{radioTwoLabel}</div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DashboardRadio;
