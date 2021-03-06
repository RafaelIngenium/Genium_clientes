import React from "react";
import TopFiveItem from "./TopFiveItem";

const TopFiveContainer = ({ label, type, agents, flows }) => {
  return (
    <div className="top-five">
      <div className="top-five__title">{label}</div>

      <div className="top-five__content">
        {/* //type = user ou flow */}
        <TopFiveItem type={type} agents={agents} flows={flows} />
        <div className="top-five__content__btn">
          <button className="btn-text btn-text--underline">Ver Todos</button>
        </div>
      </div>
    </div>
  );
};

export default TopFiveContainer;
