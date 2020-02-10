import React from "react";
import MediaItem from "../../misc/MediaItem";

const ClientDetailsInfo = () => {
  return (
    <div className="client-details__info">
      <div className="client-details__info__header">
        <a href="#" className="user-info user-info--full">
          <div className="user-info__photo">
            <img
              className="user-info__photo__img"
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="user-info__text user-info__text">
            <div className="user-info__text__title">
              <div className="user-info__text__title__name">
                Roberta Santana da Silva Souza
              </div>
            </div>
            <div className="user-info__text__subtitle">
              roberta.santana.da.silva.souza@mail.com
            </div>
          </div>
        </a>

        <button className="btn-outlined btn-outlined--primary">
          Mover para fila
        </button>
      </div>

      <div className="client-details__info__resume">
        <div className="client-details__info__resume-1">
          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">Canal:</div>
            <div className="client-details__info__resume__description">
              <MediaItem mediaType="whatsapp" mediaValue="whatsapp" />
            </div>
          </div>

          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">Entrou:</div>
            <div className="client-details__info__resume__description">
              08:28PM
            </div>
          </div>

          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">Fila:</div>
            <div className="client-details__info__resume__description">
              Fila, 00:05:00
            </div>
          </div>
        </div>
        <div className="client-details__info__resume-2">
          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">Status:</div>
            <div className="client-details__info__resume__description">
              Digitando...
            </div>
          </div>

          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">Fluxo:</div>
            <div className="client-details__info__resume__description">
              Vendas
            </div>
          </div>

          <div className="client-details__info__resume__item">
            <div className="client-details__info__resume__text">
              Contato anterior:
            </div>
            <div className="client-details__info__resume__description">
              28-012019
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsInfo;
