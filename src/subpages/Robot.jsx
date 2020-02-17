import React from "react";
import RobotComponent from "../components/Robot/RobotComponent";
import SubPageHeader from "../components/misc/SubPageHeader";

const Robot = () => {
  return (
    <React.Fragment>
      <SubPageHeader
        title="Bot"
        actionEnabled={true}
        actionBtnLabel="Salvar e fechar"
        withButton={true}
      />
      <RobotComponent />
    </React.Fragment>
  );
};

export default Robot;
