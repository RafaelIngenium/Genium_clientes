import React from "react";
import RobotComponent from "../components/Robot/RobotComponent";
import SubPageHeader from "../components/misc/SubPageHeader";

const Robot = () => {
  return (
    <div>
      <SubPageHeader
        title="Bot"
        actionEnabled={true}
        actionBtnLabel="Salvar e fechar"
      />
      <RobotComponent />
    </div>
  );
};

export default Robot;
