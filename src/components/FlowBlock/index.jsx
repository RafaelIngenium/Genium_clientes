import React from "react";
import { connect,useSelector } from "react-redux";
import CallAgent from "./CallAgent"
import BoxDraggable from "./BoxDraggable"
import ConditionBlock from "./ConditionBlock"
import FinishBlock from "./FinishBlock"
import IntegrationFlow from "./IntegrationFlow"
import LocationBlock from "./LocationBlock"
import StartFlow from "./StartFlow"
import MainFlow from "./MainFlow"

const FlowBlock = () => {
  return (
        <React.Fragment>
           <MainFlow />
           <BoxDraggable />
           <StartFlow />
           <IntegrationFlow />
           <CallAgent />
           <FinishBlock />
           <ConditionBlock />
           <LocationBlock />
        </React.Fragment>
           
  );
};

export default connect(null, null)(FlowBlock);