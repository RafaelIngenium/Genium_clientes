import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {ReactComponent as Overdue} from "../../build/images/overdue.svg"
import {ReactComponent as Warning} from "../../build/images/warning.svg"
import {ReactComponent as Checkmark} from "../../build/images/checkmark.svg"
import {ReactComponent as Sitemap} from "../../build/images/sitemap.svg"
import webchaticon from "../../build/images/webchat-icon.svg"
import whatsappicon from "../../build/images/whatsapp.svg"
import voiceicon from "../../build/images/microfone.svg"
import messengericon from "../../build/images/messenger.svg"
import search from "../../build/images/search.svg"
import save from "../../build/images/save.svg"
import {ReactComponent as Comments} from "../../build/images/comments-alt.svg"
import {ReactComponent as SideWindow} from "../../build/images/side-window.svg" 
import question from "../../build/images/question.svg"
import settings from "../../build/images/side-window.svg" 
import { changeHeader } from "../../store/environment/environment.action";

const HeaderConstructor = ({changemodescreen,changemodeflow}) => {
  const dispatch                        = useDispatch();   
  const history                         = useHistory();
  const classConstructor                = useSelector(state => state.environmentReducer.class_constructor);
  const [mode, changeMode]              = useState('constructor');
  const [modeflow, changeTypeFlow]      = useState('advanced');

  function modeScreen(mode){
    changeMode(mode)
    changemodescreen(mode)
  }

  function modeFlow(mode){
    changemodeflow(mode)
    changeTypeFlow(mode)
  }

  function returnHeader(){
      if(classConstructor === 'diagram')
        dispatch(changeHeader(''));
      else
        history.push("/app/sitemap");

  }

  return (
      <React.Fragment>
          <div class={classConstructor}>
            <div class="header header--first-fluxo">
                <a href="#" class="back" onClick={returnHeader}>
                    <i class="material-icons">arrow_back</i>
                    <div class="back__title">Meu primeiro fluxo</div>
                </a>


                <div class="change-social-social">
                    <div class="change-social-social__item wbc active"><img src={webchaticon} />
                        <div class="change-social-social__item__text">WebChat</div>
                    </div>
                    <div class="change-social-social__item wpp"><img src={whatsappicon} />
                        <div class="change-social-social__item__text">Whatsapp</div>
                    </div>
                    <div class="change-social-social__item msgr"><img src={messengericon} />
                        <div class="change-social-social__item__text">Messenger</div>
                    </div>
                    <div class="change-social-social__item voice"><img src={voiceicon} />
                        <div class="change-social-social__item__text">Voice</div>
                    </div>
                </div>

                <div class="search">
                    <div class="search__btn">
                        <img src={search} />
                    </div>
                    <input class="search__input" placeholder="Busca" />
                </div>


                <div class="btn-header-fluxo">
                    <div class="container-btn-fluxo">

                        <div class="pdf-export">
                            <button class="pdf-button"><img src={save} />Salvar como PDF</button>
                        </div>

                        <div class="change-mode">
                            <div class={modeflow === 'advanced' ? "change-mode__icon adv active":"change-mode__icon adv"} onClick={() => modeFlow('advanced')}>
                                <Sitemap />
                            </div>
                            <div class={modeflow === 'simple' ? "change-mode__icon simple active":"change-mode__icon simple"} onClick={() => modeFlow('simple')}>
                                <Comments />
                            </div>
                            <div class={modeflow === 'window' ? "change-mode__icon window-side active":"change-mode__icon window-side"} onClick={() => modeFlow('window')}>
                                <SideWindow />
                            </div>
                        </div>
                        <div class="container-btn-fluxo container-btn-fluxo--left">
                            <button class="btn btn--light help" onclick="showModal('getting-started')"><img src={question} /></button>
                            <button class="btn btn--light settings"><img src={settings} /></button>
                        </div>
                    </div>
                </div>

            </div>

            <div class="header header--sub-header">
            <nav class="sub-header-container">
                <div class={mode === 'constructor' ? "nav-sub-header build-nav active":"nav-sub-header build-nav"} onClick={() => modeScreen('constructor')}>Construção</div>
                <div class={mode === 'test' ? "nav-sub-header test-nav active":"nav-sub-header test-nav"} onClick={() => modeScreen('test')}>Teste</div>
                <div class={mode === 'publish' ? "nav-sub-header publish-nav active":"nav-sub-header publish-nav"} onClick={() => modeScreen('publish')}>Publicar</div>
            </nav> 
            <div class="header__col">
                <div class="notification-builder success active">
                    <div class="notification-builder__main">
                        <div class="notification-builder__main__title">Lorem ipsum</div>
                        <div class="notification-builder__main__text">Lorem ipsum dolor sit amet.</div>
                    </div>

                    <div class="notification-builder__icon"><Checkmark /></div>

                    <div class="notification success active"><Checkmark /> Lorem ipsum dolor sit amet.</div>

                </div>


                <div class="notification-builder warning active">
                    <div class="notification-builder__main">
                        <div class="notification-builder__main__title">Lorem ipsum</div>
                        <div class="notification-builder__main__text">Lorem ipsum dolor sit amet.</div>
                    </div>

                    <div class="notification-builder__icon"><Warning /></div>

                    <div class="notification warning active"><Warning /> Lorem ipsum dolor sit amet.</div>
                </div>

                <div class="notification-builder error active">
                    <div class="notification-builder__main">
                        <div class="notification-builder__main__title">Lorem ipsum</div>
                        <div class="notification-builder__main__text">Lorem ipsum dolor sit amet.</div>
                    </div>

                    <div class="notification-builder__icon"><Overdue /></div>

                    <div class="notification error active"><Overdue /> Lorem ipsum dolor sit amet.</div>
                </div>
            </div>
      </div>
          </div>
      </React.Fragment>
  );
};

export default connect(null, null)(HeaderConstructor);
