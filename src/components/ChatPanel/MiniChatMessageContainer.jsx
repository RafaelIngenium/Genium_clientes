import React from "react";
import MiniChatMessageContainerText from "./MiniChatMessageContainerText";

const MiniChatMessageContainer = () => {
  return (
    <div className="mini-chat__message-container__buddle mini-chat__message-container__buddle--left">
      <img
        className="mini-chat__message-container__buddle__img"
        src="https://ichef.bbci.co.uk/news/660/cpsprodpb/154EC/production/_102967278_1f1ecc7c-a677-4e9f-838a-317186227aad.jpg"
        alt="perfil"
      />
      <div className="mini-chat__message-container__buddle__call-bubble">
        <MiniChatMessageContainerText />
      </div>
    </div>
  );
};

export default MiniChatMessageContainer;
