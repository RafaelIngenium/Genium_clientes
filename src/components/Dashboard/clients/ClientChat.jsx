import React from "react";

const ClientChat = () => {
  return (
    <div className="chat-content">
      <div className="chat">
        <div className="mini-chat__body">
          <div className="mini-chat__message-container">
            <span className="mini-chat__message-container__time">
              Ontem, 26-09-2019
            </span>

            <div className="mini-chat__message-container__buddle mini-chat__message-container__buddle--left">
              <img
                className="mini-chat__message-container__buddle__img"
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="perfil"
              />
              <div className="mini-chat__message-container__buddle__text">
                adipisicing elit. Facere vitaeus tempora nemo adipisci!
              </div>
            </div>

            {/* <!-- <span className="mini-chat__message-container__time">Hoje, 05-06-2019</span> --> */}
            <div className="mini-chat__message-container__buddle mini-chat__message-container__buddle--right">
              <img
                className="mini-chat__message-container__img-bot"
                src="https://media.sproutsocial.com/uploads/2016/08/Facebook-Messenger-Bot-01.png"
                alt="perfil"
              />
              <div className="mini-chat__message-container__buddle__text">
                adipisicing elit. Facere vitaeus tempora nemo adipisci!
              </div>
            </div>

            <div className="mini-chat__digitando">
              Usuario está digitando<span>...</span>
            </div>
          </div>
        </div>

        <div className="mini-chat__footer">
          <div className="mini-chat__footer__input-content">
            <input
              className="mini-chat__footer__input-content__input"
              type="text"
              placeholder="Escreva sua mensagem"
            />
            <button className="mini-chat__footer__input-content__sent">
              {/* <?php include '../build/images/send-minichat.svg' ?> */}
            </button>
          </div>

          <button className="mini-chat__footer__btns">
            {/* <?php include '../build/images/message-outline.svg' ?> */}
          </button>

          <button className="mini-chat__footer__btns">
            {/* <?php include '../build/images/attachment.svg' ?> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientChat;
