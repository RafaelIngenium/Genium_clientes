import React from "react";
import MiniChatTImer from "./MiniChatTImer";
import MiniChatFooter from "./MiniChatFooter";
import MiniChatHeader from "./MiniChatHeader";
import MiniChatMessageContainer from "./MiniChatMessageContainer";

const MiniChat = props => {
  return (
    <div className={props.status ? "mini-chat active" : "mini-chat"}>
      <MiniChatHeader />
      <div className="mini-chat__body">
        <div className="mini-chat__body__welcome">
          <div className="mini-chat__body__welcome__img"></div>
          <div className="mini-chat__body__welcome__text">
            Olá! Estou aqui para responder suas perguntas e te ajudar!
          </div>
        </div>
        <div className="mini-chat__message-container">
          <MiniChatTImer />
          {/* <!-- Left --> */}
          <MiniChatMessageContainer
            msgPos="left"
            avatarSrc="https://ichef.bbci.co.uk/news/660/cpsprodpb/154EC/production/_102967278_1f1ecc7c-a677-4e9f-838a-317186227aad.jpg"
          />
          {/* <!-- Right --> */}
          <MiniChatMessageContainer
            msgPos="right"
            avatarSrc="https://media.sproutsocial.com/uploads/2016/08/Facebook-Messenger-Bot-01.png"
          />
          {/* <!-- left --> */}
          <MiniChatMessageContainer
            msgPos="left"
            avatarSrc="https://ichef.bbci.co.uk/news/660/cpsprodpb/154EC/production/_102967278_1f1ecc7c-a677-4e9f-838a-317186227aad.jpg"
          />
          {/* <!-- Right --> */}
          <MiniChatMessageContainer
            msgPos="right"
            avatarSrc="https://media.sproutsocial.com/uploads/2016/08/Facebook-Messenger-Bot-01.png"
          />
          <MiniChatTImer />
          {/* <!-- left --> */}
          <MiniChatMessageContainer
            msgPos="left"
            avatarSrc="https://ichef.bbci.co.uk/news/660/cpsprodpb/154EC/production/_102967278_1f1ecc7c-a677-4e9f-838a-317186227aad.jpg"
          />{" "}
          {/* <!-- left --> */}
        </div>

        {/* <!-- Digitando --> */}
        <div className="mini-chat__digitando">
          Usuario está digitando<span>...</span>
        </div>
      </div>

      <MiniChatFooter />
    </div>
  );
};

export default MiniChat;
