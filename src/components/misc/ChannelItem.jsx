import React from "react";
import { ReactComponent as WebChat } from "../../build/images/webchat-icon.svg";
import { ReactComponent as Whatsapp } from "../../build/images/whatsapp-icon.svg";
import { ReactComponent as Messenger } from "../../build/images/messenger-icon.svg";
import { ReactComponent as Voice } from "../../build/images/voz-icon.svg";

const ChannelItem = ({ channelName, isChecked, handleClick }) => {
  return (
    <div
      className={`channel-group__item ${isChecked ? "active" : ""}`}
      onClick={() => handleClick(channelName, isChecked)}
    >
      <div className="channel-group__item__check">
        <i className="material-icons">check</i>
      </div>
      <div className="channel-group__item__media">
        <div className="channel-group__item__media__img">
          {channelName === "whatsapp" && <Whatsapp />}
          {channelName === "web-chat" && <WebChat />}
          {channelName === "messenger" && <Messenger />}
          {channelName === "voice" && <Voice />}
        </div>
        <div className="channel-group__item__media__title">{channelName}</div>
      </div>
    </div>
  );
};

export default ChannelItem;
