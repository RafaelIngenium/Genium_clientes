import React from "react";
import { ReactComponent as SendMinichat } from "../../assets/images/send-minichat.svg";
import { ReactComponent as Attachment } from "../../assets/images/attachment.svg";

const MiniChatFooter = () => {
  return (
    <div className="mini-chat__footer">
      <div className="mini-chat__footer__input-content">
        <input
          className="mini-chat__footer__input-content__input"
          type="text"
          placeholder="Escreva sua mensagem"
        />
        <button className="mini-chat__footer__input-content__sent">
          <SendMinichat />
        </button>
      </div>
      <button className="mini-chat__footer__btns">
        <Attachment />
      </button>
    </div>
  );
};

export default MiniChatFooter;
