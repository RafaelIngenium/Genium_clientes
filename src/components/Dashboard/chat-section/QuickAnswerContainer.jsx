import React from "react";
import { ReactComponent as Outline } from "../../../build/images/message-outline.svg";
import { PopUver } from "../../../utils/Typpy";

const renderPopoverMessage = (e,todos, addMessage) => (
  <div class="context-menu" id="premade-msg">
      <div class="context-menu__list premade-msg">

          <p class="premade-msg__title">Respostas rápidas</p>
          <div class="premade-msg__content">
              <ul class="premade-msg__list">
                  {todos.map(todo => (
                    <li class="premade-msg__item" onClick={() => addMessage(todo.qck_asw_answer,todo.editable,todo.mimetypeid,todo.filepath)}>
                      {todo.qck_asw_keyword}
                    </li>
                  ))}
              </ul>
              <div class="premade-msg__input-wrapper">
                  <input type="text" class="premade-msg__search-input" placeholder="Pesquise uma resposta..." />
                  <span class="premade-msg__input-icon">
                      <i class="material-icons">search</i>
                  </span>
              </div>
          </div>

      </div>
  </div>
);

const QuickAnswerContainer = ({addMessage,quickanswers,simultClick}) => {

  return (
    <PopUver trigger="click" interactive={true} content={renderPopoverMessage(this, quickanswers, addMessage)}>
        <button ref={simultClick} class="mini-chat__footer__btns tippy-context-menu" data-template="premade-msg">
            <Outline />
        </button>
    </PopUver>
  );
};

export default QuickAnswerContainer;
