import React from "react";
import MiniChatMessageContainerText from "./MiniChatMessageContainerText";

const MiniChatMessageContainer = props => {
  return (
    <div
      className={`mini-chat__message-container__buddle ${
        props.msgPos === "left"
          ? "mini-chat__message-container__buddle--left"
          : "mini-chat__message-container__buddle--right"
      }`}
    >
      <img
        className="mini-chat__message-container__buddle__img"
        className={
          props.msgPos === "left"
            ? "mini-chat__message-container__buddle__img"
            : "mini-chat__message-container__img-bot"
        }
        src={props.avatarSrc}
        alt="perfil"
      />
      <div className="mini-chat__message-container__buddle__call-bubble">
        <MiniChatMessageContainerText />
        <MiniChatMessageContainerText />
      </div>
    </div>
  );
};

export default MiniChatMessageContainer;
