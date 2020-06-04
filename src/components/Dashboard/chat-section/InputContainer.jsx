

import React from "react";

const InputContainer = ({setText,inputEl,textInput,HandleKeyPress}) => {
  return (
    <input class="mini-chat__footer__input-content__input" ref={inputEl} onChange={event => setText(event.target.value)} type='text' value={textInput} onKeyUp={event => HandleKeyPress(event)} id="chat-message" name="chat-message" placeholder="Escreva sua mensagem" />
  );
};

export default InputContainer;
