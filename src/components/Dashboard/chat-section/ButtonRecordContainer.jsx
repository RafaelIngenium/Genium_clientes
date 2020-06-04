import React from "react";
import { ReactComponent as Voz } from "../../../build/images/voz_icon.svg";

const ButtonRecord = ({start}) => {

  return (
        <button class="mini-chat__footer__btns" onClick={start}>
            <Voz />
        </button>
  );
};

export default ButtonRecord;
