import React from "react";
import { ReactComponent as Calendar } from "../../build/images/calendar-alt.svg";
import { ReactComponent as Clock } from "../../build/images/clock.svg";
import { ReactComponent as Whatsapp } from "../../build/images/whatsapp-icon.svg";
import { ReactComponent as WebChat } from "../../build/images/webchat-icon.svg";
import { ReactComponent as Messenger } from "../../build/images/messenger-icon.svg";
import { ReactComponent as Voice } from "../../build/images/voz-icon.svg";

const MediaItem = ({ mediaType, mediaValue }) => {
  return (
    <div className="media">
      <div className="media__icon">
        {mediaType.toLowerCase() === "calendar" && <Calendar />}
        {mediaType.toLowerCase() === "clock" && <Clock />}
        {mediaType.toLowerCase() === "whatsapp" && <Whatsapp />}
        {mediaType.toLowerCase() === "webchat" && <WebChat />}
        {mediaType.toLowerCase() === "messenger" && <Messenger />}
        {mediaType.toLowerCase() === "voice" && <Voice />}
      </div>
      <div className="media__text">{mediaValue}</div>
    </div>
  );
};

export default MediaItem;
