import React from "react";
import ChannelItem from "../misc/ChannelItem";

const ModalConfFluxo = () => {
  const channels = ["web-chat", "messenger", "whatsapp", "voice"];
  return (
    <React.Fragment>
      <div className="name-fluxo">
        <div className="fluxo-title">Nome do fluxo</div>
        <label>
          <input type="text" id="User" name="name" placeholder="Nome" />
        </label>
      </div>

      <div className="select-fluxo">
        <div className="fluxo-title">Onde você quer salvar?</div>

        <select name="" id="">
          <option value="">Selecione a pasta</option>
          <option value="">Fluxo Pasta</option>
          <option value="">Fluxo Pasta</option>
          <option value="">Fluxo Pasta</option>
        </select>
      </div>
      <div className="comunication-fluxo">
        <div className="fluxo-title">Por onde você vai se comunicar?</div>
        {channels.map((channel, i) => (
          <ChannelItem key={i} channelName={channel} />
        ))}

        <div className="fluxo-title">When should I be available?</div>

        <div className="fluxo-text">Opening Hours</div>
      </div>

      <div className="radio-content--modal">
        <div className="radio-button">
          <input
            type="radio"
            id="radio-1"
            name="radio"
            value="radio-1"
            checked=""
          />
          <label className="" htmlFor="radio-1">
            <span>
              <div className="mask"></div>
            </span>

            <div className="text">Durante horário comercial</div>
          </label>
        </div>

        <div className="radio-button">
          <input type="radio" id="radio-2" name="radio" value="radio-2" />
          <label htmlFor="radio-2">
            <span>
              <div className="mask"></div>
            </span>

            <div className="text">Fora do horário comercial</div>
          </label>
        </div>
        <div className="radio-button">
          <input type="radio" id="radio-3" name="radio" value="radio-3" />
          <label htmlFor="radio-3">
            <span>
              <div className="mask"></div>
            </span>

            <div className="text">Fora do horário comercial</div>
          </label>
        </div>
      </div>

      <div className="days-container">
        <div className="days-container__days-item active">D</div>
        <div className="days-container__days-item">S</div>
        <div className="days-container__days-item">T</div>
        <div className="days-container__days-item">Q</div>
        <div className="days-container__days-item">Q</div>
        <div className="days-container__days-item">S</div>
        <div className="days-container__days-item">S</div>
      </div>

      <div className="select-fluxo select-fluxo--date">
        <select className="select-1" name="" id="">
          <option value="hora" selected>
            00:00
          </option>
          <option value="hora">01:00</option>

          <option value="hora">11:00</option>
          <option value="hora">12:00</option>
        </select>

        <select className="select-2" name="hora" id="">
          <option value="hora" selected>
            00:00
          </option>
          <option value="hora">01:00</option>
          <option value="hora">11:00</option>
          <option value="hora">12:00</option>
        </select>

        <div className="select-3" name="" id="">
          <div className="date-modal">27/05 - 29/06 [icon-date]</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalConfFluxo;
