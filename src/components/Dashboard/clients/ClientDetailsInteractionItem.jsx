import React, { useEffect } from "react";
import MediaItem from "../../misc/MediaItem";
import { ReactComponent as Whatsapp } from "../../../assets/images/whatsapp-icon.svg";
import { ReactComponent as WebChat } from "../../../assets/images/webchat-icon.svg";
import { ReactComponent as Messenger } from "../../../assets/images/messenger-icon.svg";
import { ReactComponent as Voice } from "../../../assets/images/voz-icon.svg";

const ClientDetailsInteractionItem = ({ channel }) => {
  return (
    <div className="client-details__interactions__body__row">
      <div className="client-details__interactions__body__item-1">
        <div className="client-details__interactions__body__item__title">
          Vendas
        </div>
      </div>
      <div className="client-details__interactions__body__item-2">
        <div className="client-details__interactions__body__item__icon">
          {channel.toLowerCase() === "whatsapp" && <Whatsapp />}
          {channel.toLowerCase() === "webchat" && <WebChat />}
          {channel.toLowerCase() === "messenger" && <Messenger />}
          {channel.toLowerCase() === "voice" && <Voice />}
        </div>
      </div>
      <div className="client-details__interactions__body__item-3">
        <MediaItem mediaType="calendar" mediaValue="20-08-2019" />
      </div>
      <div className="client-details__interactions__body__item-4">
        <MediaItem mediaType="clock" mediaValue="20-08-2019" />
      </div>
    </div>
  );
};

export default ClientDetailsInteractionItem;
