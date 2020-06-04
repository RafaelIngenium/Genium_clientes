import React from "react";
import { ReactComponent as Send } from "../../../build/images/send-minichat.svg";

const ButtonSendMessage = ({sendMessage}) => {

  return (
          <button class="mini-chat__footer__input-content__sent" onClick={sendMessage}>
              <Send />
          </button>
  );
};

export default ButtonSendMessage;
