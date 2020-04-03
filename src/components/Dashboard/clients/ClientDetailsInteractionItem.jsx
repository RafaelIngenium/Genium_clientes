import React, { useEffect } from "react";
import MediaItem from "../../misc/MediaItem";
import { ReactComponent as Whatsapp } from "../../../build/images/whatsapp-icon.svg";
import { ReactComponent as WebChat } from "../../../build/images/webchat-icon.svg";
import { ReactComponent as Messenger } from "../../../build/images/messenger-icon.svg";
import { ReactComponent as Voice } from "../../../build/images/voz-icon.svg";

const ClientDetailsInteractionItem = ({ contact }) => {
  return (
    <div className="client-details__interactions__body__row">
      <div className="client-details__interactions__body__item-1">
        <div className="client-details__interactions__body__item__title">
          {contact.fluxo}
        </div>
      </div>
      <div className="client-details__interactions__body__item-2">
        <div className="client-details__interactions__body__item__icon">
          {contact.idmidia === 5 && <Whatsapp />}
          {contact.idmidia === 3 && <WebChat />}
          {contact.idmidia === 4 && <Messenger />}
          {contact.idmidia === 1 && <Voice />}
        </div>
      </div>
      <div className="client-details__interactions__body__item-3">
        <MediaItem mediaType="calendar" mediaValue={contact.data} />
      </div>
      <div className="client-details__interactions__body__item-4">
        <MediaItem mediaType="clock" mediaValue={contact.hora} />
      </div>
    </div>
  );
};

export default ClientDetailsInteractionItem;
