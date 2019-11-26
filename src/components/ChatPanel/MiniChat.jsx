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
          <MiniChatMessageContainer />

          {/* <!-- Right --> */}

          {/* <!-- left --> */}
          <div className="mini-chat__message-container__buddle mini-chat__message-container__buddle--left">
            <img
              className="mini-chat__message-container__buddle__img"
              src="https://ichef.bbci.co.uk/news/660/cpsprodpb/154EC/production/_102967278_1f1ecc7c-a677-4e9f-838a-317186227aad.jpg"
              alt="perfil"
            />
            <div className="mini-chat__message-container__buddle__call-bubble">
              <div className="mini-chat__message-container__buddle__text ">
                adipisicing elit. Facere vitaeus tempora nemo adipisci!
              </div>
              <div className="mini-chat__message-container__buddle__text ">
                adipisicing elit. Facere vitaeus tempora nemo adipisci!
              </div>
              <div className="mini-chat__message-container__buddle__text ">
                adipisicing elit. Facere vitaeus tempora nemo adipisci!
              </div>

              <div className="mini-chat__message-container__buddle__text">
                adipisicing elit. Facere vitaeus tempora nemo adipisci!
              </div>
            </div>
          </div>
          {/* <!-- Right --> */}
          <div className="mini-chat__message-container__buddle mini-chat__message-container__buddle--right">
            <div className="mini-chat__message-container__buddle__call-bubble">
              <div className="mini-chat__message-container__buddle__text">
                adipisicing elit. Facere vitaeus tempora nemo adipisci!
              </div>
              <div className="mini-chat__message-container__buddle__text">
                adipisicing elit. Facere vitaeus tempora nemo adipisci!
              </div>
            </div>

            <img
              className="mini-chat__message-container__img-bot"
              src="https://media.sproutsocial.com/uploads/2016/08/Facebook-Messenger-Bot-01.png"
              alt="perfil"
            />
          </div>

          <MiniChatTImer />

          <div className="mini-chat__message-container__buddle mini-chat__message-container__buddle--left">
            <img
              className="mini-chat__message-container__buddle__img"
              src="https://ichef.bbci.co.uk/news/660/cpsprodpb/154EC/production/_102967278_1f1ecc7c-a677-4e9f-838a-317186227aad.jpg"
              alt="perfil"
            />
            <div className="mini-chat__message-container__buddle__call-bubble">
              <div className="mini-chat__message-container__buddle__text ">
                adipisicing elit. Facere vitaeus tempora nemo adipisci!
              </div>
            </div>
          </div>
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
