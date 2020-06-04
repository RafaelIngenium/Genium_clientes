import React from "react";
import TimeCounterSecond from '../../../utils/TimeCounterSecond'

const AudioContainer = ({record,stop,start,stopIn,isblocked}) => {

  return (
        <div class={record ? "active-voice":"active-voice active"} disabled={isblocked}>
            <a href="#" class="cancel"><i class="material-icons" onClick={stop}>close</i></a>

            <div class="active-chats__timer active-chats__timer--active-voice">
                <span class="active-chats__timer-icon active-chats__timer--active-voice-icon alta">•</span><TimeCounterSecond key={record} horario={0} />
            </div>

            <a href="#" class="done"><i class="material-icons" onClick={stopIn}>done</i></a>
        </div>
  );
};

export default AudioContainer;
