import React, { useState } from "react";
import ChannelItem from "../misc/ChannelItem";
import SelectComponent from "./../misc/SelectComponent";

const ModalFluxo = () => {
  const [channels, setChannels] = useState([
    { label: "web-chat", isChecked: false },
    { label: "messenger", isChecked: false },
    { label: "whatsapp", isChecked: false },
    { label: "voice", isChecked: false }
  ]);

  const handleChannelClick = channelName => {
    let newChannels = [...channels];
    newChannels.map(channel => {
      if (channel.label === channelName) {
        channel.isChecked = !channel.isChecked;
      }
    });
    setChannels(newChannels);
  };

  const timeArray = [
    { value: "0", label: "00:00" },
    { value: "1", label: "01:00" },
    { value: "2", label: "02:00" },
    { value: "3", label: "03:00" },
    { value: "4", label: "04:00" },
    { value: "5", label: "05:00" },
    { value: "6", label: "06:00" },
    { value: "7", label: "07:00" },
    { value: "8", label: "08:00" },
    { value: "9", label: "09:00" },
    { value: "10", label: "10:00" },
    { value: "11", label: "11:00" },
    { value: "12", label: "12:00" },
    { value: "13", label: "13:00" },
    { value: "14", label: "14:00" },
    { value: "15", label: "15:00" },
    { value: "16", label: "16:00" },
    { value: "17", label: "17:00" },
    { value: "18", label: "18:00" },
    { value: "19", label: "19:00" },
    { value: "20", label: "20:00" },
    { value: "21", label: "21:00" },
    { value: "22", label: "22:00" },
    { value: "23", label: "23:00" }
  ];

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
        <SelectComponent
          defaultOption="Selecione uma pasta"
          selectOptList={[
            { value: "test1", label: "Test1" },
            { value: "test2", label: "Test2" }
          ]}
          handleSelectedOpt={event => {
            console.log(event);
          }}
        />
      </div>
      <div className="comunication-fluxo">
        <div className="fluxo-title">Por onde você vai se comunicar?</div>
        <div className="channel-group">
          {channels.map((channel, i) => (
            <ChannelItem
              key={i}
              isChecked={channel.isChecked}
              channelName={channel.label}
              handleClick={handleChannelClick}
            />
          ))}
        </div>
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
            // checked=""
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
        <SelectComponent
          defaultOption=""
          extraClases="select-1"
          selectOptList={timeArray}
          handleSelectedOpt={event => {
            console.log(event);
          }}
        />
        <SelectComponent
          defaultOption=""
          extraClases="select-2"
          selectOptList={timeArray}
          handleSelectedOpt={event => {
            console.log(event);
          }}
        />

        <div className="select-3" name="" id="">
          <div className="date-modal">27/05 - 29/06 [icon-date]</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalFluxo;
