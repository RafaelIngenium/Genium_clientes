import React, { useState } from "react";
import ChannelItem from "../misc/ChannelItem";
import SelectComponent from "./../misc/SelectComponent";
import { timeArray } from "../../utils/helpers";

const ModalFluxo = () => {
  const [channels, setChannels] = useState([
    { label: "web-chat", isChecked: false },
    { label: "messenger", isChecked: false },
    { label: "whatsapp", isChecked: false },
    { label: "voice", isChecked: false }
  ]);

  const [activeDays, setActiveDays] = useState([
    { index: 1, label: "D", active: false },
    { index: 2, label: "S", active: false },
    { index: 3, label: "T", active: false },
    { index: 4, label: "Q", active: false },
    { index: 5, label: "Q", active: false },
    { index: 6, label: "S", active: false },
    { index: 7, label: "S", active: false }
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

  const handleDayClick = d => {
    const newActiveDays = [...activeDays];
    newActiveDays.map(day => {
      // console.log(day);
      if (day.index === d.index) day.active = !day.active;
    });

    setActiveDays(newActiveDays);
    console.log(activeDays);
  };

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
        {activeDays.map((day, i) => (
          <div
            key={i}
            className={
              day.active
                ? "days-container__days-item active"
                : "days-container__days-item"
            }
            onClick={() => handleDayClick(day)}
          >
            {day.label}
          </div>
        ))}
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
