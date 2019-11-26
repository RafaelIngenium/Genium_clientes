import React from "react";

const MiniChatHeader = () => {
  return (
    <div className="mini-chat__header">
      <div className="mini-chat__header__user">
        <img
          className="mini-chat__header__user__img"
          src="https://media.sproutsocial.com/uploads/2016/08/Facebook-Messenger-Bot-01.png"
          alt=""
        />
        <div className="mini-chat__header__user__info">
          <div className="mini-chat__header__user__info__title">Genium</div>
          <div className="mini-chat__header__user__info__subtitle">
            Ativo agora
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniChatHeader;
