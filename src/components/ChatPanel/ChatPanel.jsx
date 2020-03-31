import React, { useState } from "react";
import MiniChat from "./MiniChat";
import { ReactComponent as NounChat } from "../../build/images/noun-chat.svg";

const ChatPanel = () => {
  const [chatPanelStatus, setChatPanelStatus] = useState(false);

  const handleBtnClick = () => {
    setChatPanelStatus(!chatPanelStatus);
  };

  return (
    <div className="container__content__btn-overlay">
      <MiniChat status={chatPanelStatus} />
      <button
        className={chatPanelStatus ? "btn-overlay active" : "btn-overlay"}
        onClick={handleBtnClick}
      >
        <div className="btn-overlay__chat-icon">
          <NounChat />
        </div>
        <div className="btn-overlay__close-icon">
          <i className="material-icons">close</i>
        </div>
      </button>
    </div>
  );
};

export default ChatPanel;
