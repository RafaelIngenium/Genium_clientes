import React, { useState } from "react";
import { connect,useSelector,useDispatch } from "react-redux";
import HeaderConstructor from "../components/HeaderConstructor/"
import FLowBlock from "../components/FlowBlock/"
import {ReactComponent as AddBlock} from "../build/images/add-block.svg" 
import {ReactComponent as Add} from "../build/images/add.svg"
import {ReactComponent as Subtract} from "../build/images/subtract.svg" 
import {ReactComponent as Conversations} from "../build/images/conversations.svg" 
import {ReactComponent as View} from "../build/images/view.svg" 
import {ReactComponent as Disclose} from "../build/images/disclose.svg" 
import {ReactComponent as Checkmark} from "../build/images/checkmark.svg" 
import {ReactComponent as Overdue} from "../build/images/overdue.svg" 
import {ReactComponent as Warning} from "../build/images/warning.svg" 
import {ReactComponent as Copy_Object} from "../build/images/copy-object.svg" 

import {ReactComponent as Message} from "../build/images/messagem.svg" 
import {ReactComponent as If_Else} from "../build/images/if-else.svg" 
import {ReactComponent as Earth} from "../build/images/earth.svg" 
import {ReactComponent as Support} from "../build/images/support.svg" 
import {ReactComponent as Outlined} from "../build/images/outlined.svg" 
import {ReactComponent as End} from "../build/images/end.svg" 
import {ReactComponent as Emoji} from "../build/images/emoji.svg"
import {ReactComponent as Search} from "../build/images/search.svg"
import {ReactComponent as Clock1} from "../build/images/clock1.svg"
import {ReactComponent as Information} from "../build/images/information.svg"
import {ReactComponent as Volume} from "../build/images/volume.svg"
import {ReactComponent as Default} from "../build/images/robot-default.svg"
import {ReactComponent as Girl} from "../build/images/girl.svg"
import {ReactComponent as Tree} from "../build/images/tree.svg"
import Video from "../build/images/video.svg"
import Attachment2 from "../build/images/attachment2.svg"
import Attribute from "../build/images/attribute.svg"
import { changeHeader } from "../store/environment/environment.action";

export default function Constructor () {
  const dispatch                            = useDispatch();  
  const [mode, changeMode]                  = useState('constructor');
  const [mainpublish, changeMainPublish]    = useState('general');
  const [modeflow, changeTypeFlow]          = useState('advanced');

  function changeModeScreen (mode){
    changeMode(mode)
  }

  function changeModeFlow (mode){
    changeTypeFlow(mode)
  }

  function changeScreenHeader (mode) {
    dispatch(changeHeader(mode));
  }

  return (
          <div class="container-flow">
            <HeaderConstructor changemodescreen={changeModeScreen} changemodeflow={changeModeFlow} />
                <div class={modeflow === 'advanced' ? "advanced-mode active":"advanced-mode"}>
                        <div class={mode === 'constructor' ? "constructor active":"constructor"}>
                              <FLowBlock />
                              <div class="constructor__add-box">
                                  <AddBlock />
                                  <div class="list-drop list-drop--create-box">
                                      <div class="list-drop__item" onclick="forStartItem()"><a href="#"><Message /> Mensagem</a></div>
                                      <div class="list-drop__item" onclick="forConditionItem()"> <a href="#"> <If_Else /> Condição</a></div>
                                      <div class="list-drop__item" onclick="forIntegrationItem()"><a href="#"><Earth />Integrações</a></div>
                                      <div class="list-drop__item" onclick="forCallAgentItem()"><a href="#"><Support /> Suporte</a></div>
                                      <div class="list-drop__item" onclick="forLocationItem()"><a href="#"><Outlined />Localização</a></div>
                                      <div class="list-drop__item" onclick="forFinishItem() "><a href="#"><End />Finalização</a></div>
                                  </div>
                              </div>
                              <div class="fluxo-btn-action">
                                  <span class="separator-btn"></span>
                                  <div class="fluxo-btn-action fluxo-btn-action--left">
                                      <button class="btn btn--light zoom-in"><Add /></button>
                                      <button class="btn btn--light zoom-out"><Subtract /></button>
                                  </div>

                                  <div class="fluxo-btn-action fluxo-btn-action--right">
                                      <button class="btn btn--light btn--fluxo notes"><Conversations /></button>
                                      <button class="btn btn--light btn--fluxo view"><View /></button>
                                  </div>

                              </div>
                          </div>
                        <div class={mode === 'publish' ? "publish active":"publish"}>
                              <div class="publish__container">
                                  <div class="publish__container__col1">
                                      <div class="menu-publish">
                                          <div class={mainpublish === 'general' ? "menu-publish__item general active":"menu-publish__item general"} onClick={event => changeMainPublish('general')}><Disclose />General</div>
                                          <div class={mainpublish === 'language' ? "menu-publish__item lang active":"menu-publish__item lang"} onClick={event => changeMainPublish('language')}><Disclose />Language</div>
                                          <div class={mainpublish === 'authorization' ? "menu-publish__item autori active":"menu-publish__item autori"} onClick={event => changeMainPublish('authorization')}> <Disclose />Authorization</div>
                                      </div>
                                  </div>
                                  <div class="publish__container__col2">
                                      <div class={mainpublish === 'general' ? 'container-general active':'container-general'} >
                                          <div class="container-general__col1">

                                              <div class="wrapper-general-items">
                                                  <div class="title">What do you want to call me?</div>
                                                  <div class="wrapper-general-items__input">
                                                      <input type="text" />

                                                      <div class="wrapper-general-items__input__icon active">
                                                          <Checkmark />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="wrapper-general-items">
                                                  <div class="title">Description</div>
                                                  <textarea class="wrapper-general-items__textarea" name="" id="">Flow built using Github API’s to familiarize you with a few basic features of the platform. Provide the IDP  information and Trying the bot with your Git repo. Start exploring the configurations to know more about alert, action and knowledge tasks.
                                                  </textarea>
                                              </div>
                                              <div class="wrapper-general-items">
                                                  <div class="title">
                                                      Where do you want me to deploy?
                                                  </div>

                                                  <div class="channel-group">
                                                      <div class="channel-group__item">
                                                          <div class="channel-group__item__check">
                                                              <i class="material-icons">check</i>
                                                          </div>
                                                          <div class="channel-group__item__media">
                                                              <div class="channel-group__item__media__img">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="58.068" height="56.266" viewBox="0 0 58.068 56.266">
                                                                      <ellipse fill="none" cx="3.004" cy="3.004" rx="3.004" ry="3.004" transform="translate(10.012 29.234)"></ellipse>

                                                                      <ellipse fill="none" cx="3.004" cy="3.004" rx="3.004" ry="3.004" transform="translate(21.025 29.234)"></ellipse>
                                                                      <path fill="none" d="M47.036,33.234a22.493,22.493,0,0,1-2.6,10.612l8.91,2.4-3.6-10.913a21.055,21.055,0,0,0,2.9-10.612A20.706,20.706,0,0,0,15.9,11.609a23.633,23.633,0,0,1,8.009-1.4A22.925,22.925,0,0,1,47.036,33.234Z" transform="translate(0.019 -0.896)"></path>
                                                                      <ellipse fill="none" cx="3.004" cy="3.004" rx="3.004" ry="3.004" transform="translate(32.037 29.234)"></ellipse>
                                                                      <path fill="#ff9a00" d="M56.266,45.152l-3.2-9.611a24.323,24.323,0,0,0,2.6-10.913,24.048,24.048,0,0,0-6.908-16.82,23.765,23.765,0,0,0-38.145,6.508A23.227,23.227,0,0,0,.8,33.238,23.711,23.711,0,0,0,4,45.052L0,57.166l13.215-3.5A22.875,22.875,0,0,0,42.85,46.453l9.811,2.6,5.406,1.4ZM13.015,36.141a3,3,0,1,1,3-3A2.95,2.95,0,0,1,13.015,36.141Zm11.013,0a3,3,0,1,1,3-3A2.95,2.95,0,0,1,24.028,36.141Zm11.013,0a3,3,0,1,1,3-3A2.95,2.95,0,0,1,35.041,36.141Zm9.411,7.609a21.808,21.808,0,0,0,2.6-10.512A23.073,23.073,0,0,0,23.928,10.111a23.634,23.634,0,0,0-8.009,1.4A20.706,20.706,0,0,1,52.662,24.628a21.054,21.054,0,0,1-2.9,10.612l3.6,10.913Z" transform="translate(0 -0.9)"></path>
                                                                  </svg>
                                                              </div>
                                                              <div class="channel-group__item__media__title">Web Chat</div>
                                                          </div>
                                                      </div>

                                                      <div class="channel-group__item">
                                                          <div class="channel-group__item__check">
                                                              <i class="material-icons">check</i>
                                                          </div>
                                                          <div class="channel-group__item__media">
                                                              <div class="channel-group__item__media__img">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="56.872" height="56.877" viewBox="0 0 56.872 56.877">
                                                                      <g transform="translate(0 0)">
                                                                          <path fill="#2196f3" d="M28.461.006A27.893,27.893,0,0,0,.025,27.257,26.737,26.737,0,0,0,9.5,47.541v8.152a1.185,1.185,0,0,0,1.813,1l6.6-4.126a29.34,29.34,0,0,0,10.54,1.936A27.893,27.893,0,0,0,56.9,27.257,27.893,27.893,0,0,0,28.461.006Z" transform="translate(-0.025 0)"></path>
                                                                          <path fill="#fafafa" d="M123.049,171.171a1.185,1.185,0,0,0-1.517-.332l-12.322,6.718-7.666-6.574a1.185,1.185,0,0,0-1.609.062L85.717,185.263a1.185,1.185,0,0,0,1.405,1.877l12.322-6.718L107.117,187a1.185,1.185,0,0,0,1.609-.062l14.218-14.218A1.185,1.185,0,0,0,123.049,171.171Z" transform="translate(-75.892 -151.734)"></path>
                                                                      </g>
                                                                  </svg>
                                                              </div>
                                                              <div class="channel-group__item__media__title">Messenger</div>
                                                          </div>
                                                      </div>

                                                      <div class="channel-group__item">
                                                          <div class="channel-group__item__check">
                                                              <i class="material-icons">check</i>
                                                          </div>
                                                          <div class="channel-group__item__media">
                                                              <div class="channel-group__item__media__img">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="56.783" height="56.783" viewBox="0 0 56.783 56.783">
                                                                      <g transform="translate(0)">
                                                                          <path fill="#4caf50" d="M28.4,56.783a28.141,28.141,0,0,1-15.628-4.7l-10.911,3.5L5.4,45.029A28.065,28.065,0,0,1,0,28.394,28.391,28.391,0,1,1,28.4,56.783ZM17.7,12.976A4.139,4.139,0,0,0,14.795,14l-.082.084a9.083,9.083,0,0,0-2.826,6.826c0,2.533,1.18,5.549,3.323,8.492l.05.069c.03.039.084.117.162.23l.016.024c4.029,5.827,8.988,10.173,13.962,12.236,3.836,1.586,6.483,2.325,8.33,2.325a7.648,7.648,0,0,0,1.62-.184c2.206-.475,4.891-2.1,5.565-4.006a7.118,7.118,0,0,0,.491-3.961c-.156-.268-.524-.445-1.082-.713l-.041-.019c-.144-.069-.3-.144-.467-.228-.614-.307-4.864-2.408-5.652-2.688a2.087,2.087,0,0,0-.715-.139,1.6,1.6,0,0,0-1.329.762l-.262.369a28.611,28.611,0,0,1-1.956,2.57,1.578,1.578,0,0,1-1.176.479,2.134,2.134,0,0,1-.817-.167l-.211-.085a20.856,20.856,0,0,1-6.448-4.019,25.438,25.438,0,0,1-4.6-5.724c-.479-.813-.08-1.28.305-1.732l.027-.031c.265-.338.52-.61.791-.9.15-.159.294-.312.441-.477l.046-.052a4.6,4.6,0,0,0,.874-1.246,1.74,1.74,0,0,0-.123-1.544c-.138-.289-.974-2.32-1.712-4.112l-.013-.032-.125-.3c-.271-.658-.519-1.261-.7-1.695-.552-1.3-.953-1.364-1.809-1.4-.094,0-.191-.008-.291-.014C18.157,12.987,17.939,12.976,17.7,12.976Z"></path>
                                                                      </g>
                                                                  </svg>
                                                              </div>
                                                              <div class="channel-group__item__media__title">Whatsapp</div>
                                                          </div>
                                                      </div>

                                                      <div class="channel-group__item">
                                                          <div class="channel-group__item__check">
                                                              <i class="material-icons">check</i>
                                                          </div>
                                                          <div class="channel-group__item__media">
                                                              <div class="channel-group__item__media__img">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57">
                                                                      <g transform="translate(-472.865 -43)">
                                                                          <circle fill="#7e8190" cx="28.5" cy="28.5" r="28.5" transform="translate(472.865 43)"></circle>
                                                                          <g transform="translate(-84.135 -13)">
                                                                              <path fill="#FFF" d="M35.335,31.765A6.687,6.687,0,0,0,42,25.1V13.667a6.667,6.667,0,0,0-13.335,0V25.1A6.687,6.687,0,0,0,35.335,31.765Zm-2.857-18.1h5.715a.952.952,0,0,1,0,1.9H32.477a.952.952,0,0,1,0-1.9Zm0,4.762h5.715a.952.952,0,0,1,0,1.9H32.477a.952.952,0,0,1,0-1.9Zm0,4.762h5.715a.952.952,0,0,1,0,1.9H32.477a.952.952,0,0,1,0-1.9Zm16.192-1.9V25.1A13.322,13.322,0,0,1,36.287,38.385v7.668h4.286a.952.952,0,1,1,0,1.9H29.144a.952.952,0,0,1,0-1.9h5.239V38.385A13.356,13.356,0,0,1,22,25.1v-3.81a.952.952,0,0,1,1.9,0v1.9h2.857v1.9H23.9a11.43,11.43,0,0,0,22.86,0H43.907v-1.9h2.857v-1.9a.952.952,0,1,1,1.9,0Z" transform="translate(550 57)"></path>
                                                                          </g>
                                                                      </g>
                                                                  </svg>
                                                              </div>
                                                              <div class="channel-group__item__media__title">Voz</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>

                                          </div>

                                          <div class="container-general__col2">


                                              <form action="" class="wrapper-general-items">
                                                  <div class="title">When should I be available?</div>

                                                  <div class="radio-group-row">
                                                      <div class="radio-content radio-content--column">
                                                          <div class="radio-button margin">
                                                              <input type="radio" id="radio-7" name="radio" value="radio-7" checked="" />
                                                              <label for="radio-7">
                                                                  <span>
                                                                      <div class="mask"></div>
                                                                  </span>

                                                                  <div class="text">Durante horário comercial - 09:00 - 19:00</div>
                                                              </label>
                                                          </div>

                                                          <div class="radio-button">
                                                              <input type="radio" id="radio-8" name="radio" value="radio-8" />
                                                              <label for="radio-8">
                                                                  <span>
                                                                      <div class="mask"></div>
                                                                  </span>

                                                                  <div class="text">Fora do horário comercial</div>
                                                              </label>
                                                          </div>
                                                          <div class="radio-button">
                                                              <input type="radio" id="radio-9" name="radio" value="radio-9" />
                                                              <label for="radio-9">
                                                                  <span>
                                                                      <div class="mask"></div>
                                                                  </span>

                                                                  <div class="text">Customizado</div>
                                                              </label>
                                                          </div>
                                                      </div>
                                                  </div>

                                              </form>
                                              <form class="wrapper-general-items">
                                                  <div class="title">Target Audience</div>
                                                  <div class="radio-group-row">
                                                      <div class="radio-content radio-content--column">
                                                          <div class="radio-button margin">
                                                              <input type="radio" id="radio-10" name="radio" value="radio-10" checked="" />
                                                              <label for="radio-10">
                                                                  <span>
                                                                      <div class="mask"></div>
                                                                  </span>

                                                                  <div class="text">General Public
                                                                      <span class="text__span">
                                                                          (No ability to manage bot assignments)</span></div>
                                                              </label>
                                                          </div>

                                                          <div class="radio-button">
                                                              <input type="radio" id="radio-11" name="radio" value="radio-11" />
                                                              <label for="radio-11">
                                                                  <span>
                                                                      <div class="mask"></div>
                                                                  </span>

                                                                  <div class="text">Enterprise Users
                                                                      <span class="text__span">(Manage user assignment via the User Management)</span></div>
                                                              </label>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="alert-message success">
                                                      <div class="icon">
                                                          <Checkmark />
                                                      </div>
                                                      <div class="text">This cannot be changed once it is published</div>
                                                  </div>
                                                  <div class="alert-message erro">
                                                      <div class="icon">
                                                          <Overdue />
                                                      </div>
                                                      <div class="text">This cannot be changed once it is published</div>
                                                  </div>
                                                  <div class="alert-message warning">
                                                      <div class="icon">
                                                          <Warning />
                                                      </div>
                                                      <div class="text">This cannot be changed once it is published</div>
                                                  </div>
                                              </form>
                                              <div class="wrapper-general-items">
                                                  <div class="title">Default Language</div>

                                                  <div class="container-select">
                                                      <button class="select-btn"><span id="pedido">Portuguese (Brazilian)</span> <i class="material-icons">chevron_right</i></button>
                                                      <div class="list-drop list-drop--primary">
                                                          {/*  {/* <!-- Item --> */} */}

                                                          <div class="list-drop__item">
                                                              <span id="port">Portuguese (Brazilian)</span>
                                                          </div>

                                                          {/* {/* <!-- end item --> */}
                                                           {/* <!-- Item --> */} */}

                                                          <div class="list-drop__item">
                                                              <span id="en">English</span>
                                                          </div>

                                                          {/* {/* <!-- end item --> */}
                                                           {/* <!-- Item --> */} */}

                                                          <div class="list-drop__item">
                                                              <span id="esp">Spanish</span>
                                                          </div>

                                                          {/* {/* <!-- end item --> */} */}




                                                      </div>
                                                  </div>


                                              </div>
                                              <div class="wrapper-general-items">
                                                  <div class="title">Bot ID</div>
                                                  <div class="wrapper-general-items__input">

                                                      <input type="text" />

                                                      <div class="wrapper-general-items__input__icon">
                                                          <Copy_Object />
                                                      </div>

                                                  </div>
                                              </div>
                                          </div>


                                      </div>

                                      <div class={mainpublish === 'language' ? 'container-language active':'container-language'} >
                                          <div class="container-language__col1">
                                              <div class="title">Languages</div>
                                              <button class="btn btn--primary">
                                                  <div class="icon"><Add /></div>
                                                  Add a language
                                              </button>
                                              <div class="wrapper-lang-items">
                                                  <div class="wrapper-lang-items__item active">Portuguese</div>
                                                  <div class="wrapper-lang-items__item">English</div>
                                                  <div class="wrapper-lang-items__item">Chinese</div>
                                                  <div class="wrapper-lang-items__item">Spanish</div>
                                              </div>
                                          </div>
                                          <div class="container-language__col2">
                                              <div class="title">Localisation</div>
                                              <div class="container-language__col2__textarea">
                                                  <textarea name="" id="">
                                                      “Meu Primeiro Fluxo” = “My First Flow”
                                                      “Bloco” = Block
                                                      “Durante” = Duration
                                                      “Ola”= “Hello”
                                                      “Tudo Bem” = “All Fine”
                                                      “Continua” = Continue 
                                                  </textarea>
                                              </div>
                                          </div>
                                      </div>

                                      <div class={mainpublish === 'authorization' ? 'container-authorization active':'container-authorization'} >
                                          <div class="container-authorization__col1">
                                              <div class="container-authorization__col1__row">
                                                  <div class="wrapper-general-items">
                                                      <div class="title">Authentication</div>

                                                      <div class="container-select">
                                                          <button class="select-btn"><span id="">Basic Auth</span> <i class="material-icons">chevron_right</i></button>
                                                          <div class="list-drop list-drop--primary">
                                                              {/*  {/* <!-- Item --> */} */}

                                                              <div class="list-drop__item">
                                                                  <span id="port"></span>
                                                              </div>

                                                              {/* {/* <!-- end item --> */}
                                                               {/* <!-- Item --> */} */}

                                                              <div class="list-drop__item">
                                                                  <span id="en"></span>
                                                              </div>

                                                              {/* {/* <!-- end item --> */}
                                                               {/* <!-- Item --> */} */}

                                                              <div class="list-drop__item">
                                                                  <span id="esp"></span>
                                                              </div>

                                                              {/* {/* <!-- end item --> */} */}

                                                          </div>
                                                      </div>


                                                  </div>  
                                              </div>
                                              <div class="container-authorization__col1__row">
                                                  <div class="title">Client ID</div>
                                                  <div class="container-authorization__col1__row__input">
                                                      <input type="text" />
                                                  </div>
                                              </div>
                                              <div class="container-authorization__col1__row">
                                                  <div class="title">Client Secret Key</div>
                                                  <div class="container-authorization__col1__row__input">
                                                      <input type="text" />
                                                  </div>
                                              </div>
                                              <div class="container-authorization__col1__row">
                                                  <div class="title">Callback URL</div>
                                                  <div class="container-authorization__col1__row__input">
                                                      <input type="text" />
                                                  </div>
                                              </div>
                                              <div class="container-authorization__col1__row">
                                                  <div class="title">Authentication URL</div>
                                                  <div class="container-authorization__col1__row__input">
                                                      <input type="text" />
                                                  </div>
                                              </div>
                                          </div>

                                      </div>

                                  </div>
                                  <div class="publish__container__bottom">
                                      <button class="btn btn--primary" onclick="showModal('confirm-modal-publish')">Upload</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                <div class={modeflow === 'simple' ? "simple-mode active":"simple-mode"}>
                <div class="constructor-simple">
                        <div class="side-left">
                            <div class="container-actions left">


                                <div class="wrapper-actions">
                                    <div class="bubble-tap">Tap Here</div>
                                    <div class="box-actions">
                                        <div class="box-actions__content">
                                            <div class="title">Mensagem</div>
                                            <div class="container-message">
                                                <textarea name="" id=""></textarea>
                                                <div class="container-message__emojis">
                                                    <div class="container-message__emojis__icon"><Emoji /></div>

                                                    <div class="list-emoji">


                                                        <div class="list-emoji__header">
                                                            <div class="search">
                                                                <div class="search__btn">
                                                                    <Search />
                                                                </div>
                                                                <input class="search__input" placeholder="Busca" />
                                                            </div>
                                                        </div>


                                                        <div class="list-emoji__favorite">
                                                            <div class="title">Favoritos</div>
                                                            <div class="list-emoji__content-emoji">
                                                                <button>😃</button>
                                                                <button>😄</button>
                                                                <button>😂</button>
                                                                <button>😊</button>
                                                                <button>🤩</button>
                                                                <button>😎</button>
                                                                <button>😍</button>
                                                            </div>

                                                        </div>

                                                        <div class="list-emoji__general">
                                                            <div class="title">Geral</div>
                                                            <div class="list-emoji__content-emoji">
                                                                <button>😀</button>
                                                                <button>😁</button>
                                                                <button>😂</button>
                                                                <button>🤣</button>
                                                                <button>😃</button>
                                                                <button>😄</button>
                                                                <button>😅</button>
                                                                <button>😆</button>
                                                                <button>😉</button>
                                                                <button>😊</button>
                                                                <button>😋</button>
                                                                <button>😎</button>
                                                                <button>😍</button>
                                                                <button>😘</button>
                                                                <button>😗</button>
                                                                <button>😙</button>
                                                                <button>😚</button>
                                                                <button>🙂</button>
                                                                <button>🤗</button>
                                                                <button>🤩</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="box-actions__content">
                                                <div class="title">Adicionar objeto</div>

                                                <div class="container-select active">
                                                    <button class="select-btn">Selecionar Objeto<i class="material-icons">chevron_right</i></button>
                                                    <div class="list-drop list-drop--primary">
                                                        {/*  {/* <!-- Item --> */} */}

                                                        <div class="list-drop__item audio"><a href="#">
                                                                <img src={Volume} />
                                                                Audio</a>
                                                        </div>

                                                        {/* <!-- end item --> */}

                                                         {/* <!-- Item --> */}
                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Image} alt="" />
                                                                Imagem</a>
                                                        </div>
                                                        {/* <!-- end item --> */}

                                                         {/* <!-- Item --> */}
                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Video} alt="" />
                                                                Vídeo</a>
                                                        </div>
                                                        {/* <!-- end item --> */}


                                                         {/* <!-- Item --> */}
                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Attachment2} alt="" />
                                                                Arquivo</a>
                                                        </div>
                                                        {/* <!-- end item --> */}

                                                         {/* <!-- Item --> */}
                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Attribute} alt="" />
                                                                Atributo</a>
                                                        </div>
                                                        {/* <!-- end item --> */}

                                                         {/* <!-- Item --> */}
                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Outlined} alt="" />
                                                                Localização</a>
                                                        </div>
                                                        {/* <!-- end item --> */}


                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Clock1} alt="" />
                                                                Tempo</a>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="wrapper-midia">

                                                    <div class="box-actions__content__midia-name active">
                                                        <div class="text">SampleVideo.mp4</div>

                                                        <span class="icon-Trash"></span>
                                                    </div>


                                                    <div class="box-actions__content__main">

                                                        <div class="uploading-midia active">
                                                            <div class="uploading-midia__progressbar-track">
                                                                <div class="uploading-midia__progressbar-bulet" style={{width:'62%'}}></div>
                                                            </div>

                                                            <div class="text">Uploading...<span class="icon-Close"></span></div>
                                                        </div>


                                                        <div class="replace-midia">
                                                            <div class="text">Replace <span class="icon-Refresh"></span></div>

                                                        </div>

                                                        <div class="box-actions__content__main__item">

                                                            <video controls></video>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="wrapper-midia">

                                                    <div class="box-actions__content__midia-name active">
                                                        <div class="text">SampleImage.png</div>

                                                        <span class="icon-Trash"></span>
                                                    </div>



                                                    <div class="box-actions__content__main">

                                                        <div class="uploading-midia">
                                                            <div class="uploading-midia__progressbar-track">
                                                                <div class="uploading-midia__progressbar-bulet" style={{width:'62%'}}></div>
                                                            </div>

                                                            <div class="text">Uploading...<span class="icon-Close"></span></div>
                                                        </div>


                                                        <div class="replace-midia active">
                                                            <div class="text">Replace <span class="icon-Refresh"></span></div>

                                                        </div>

                                                        <div class="box-actions__content__main__item">
                                                            <img src="https://s2.glbimg.com/Hhj_IrDHniT5ySukJJ2NPHx54A0=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/B/B/ICwCpATk2ABRwPr12spw/whatsapp-image-2017-07-30-at-09.46.06.jpeg" alt="" />


                                                            {/* <!-- <video controls></video> --> */}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="box-actions__content">
                                                <div class="title">Respostas <Information /></div>
                                                <div class="conteiner-answer">
                                                    <div class="conteiner-answer__input">
                                                        <div class="conteiner-answer__input__num">1</div>
                                                        <input type="text" name="" id="" />
                                                    </div>

                                                    <div class="conteiner-answer__input">
                                                        <div class="conteiner-answer__input__num">2</div>
                                                        <input type="text" name="" id="" />
                                                    </div>

                                                    <button class="btn-add">

                                                        <Add />

                                                        Adicionar resposta
                                                    </button>

                                                </div>
                                            </div>

                                            <button class="btn btn--primary">Done</button>
                                        </div>
                                    </div>
                                    {/* <div class="photo"><Default /></div> */}

                                </div>

                            </div>
                        </div>

                        {/* <!-- Box chats canais --> */}
                        <div class="chat-creating chat-creating--webchat">
                            <div class="chat-creating__container-msg right">
                                <div class="message">
                                    <div class="message-img"><Girl /></div>

                                    <div class="wrapper-bubble">
                                        <div class="message-bubble">Lorem ipsum dolor sit.</div>
                                    </div>

                                </div>
                            </div>

                            <div class="chat-creating__container-msg left">

                                <div class="message">
                                    <div class="message-img"><Girl /></div>

                                    <div class="wrapper-bubble">
                                        <div class="message-bubble">Lorem ipsum dolor sit.</div>
                                        <div class="message-bubble">Lorem ipsum dolor sit.</div>
                                        <div class="message-bubble">Lorem ipsum dolor sit.</div>
                                        <div class="message-bubble">Lorem ipsum dolor sit.</div>

                                        <div class="message-bubble message-bubble--midia">
                                            <div class="message-bubble--midia__image">
                                                <img src="https://s2.glbimg.com/Hhj_IrDHniT5ySukJJ2NPHx54A0=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/B/B/ICwCpATk2ABRwPr12spw/whatsapp-image-2017-07-30-at-09.46.06.jpeg" alt="" />
                                            </div>

                                            <div class="text">Imagem</div>

                                        </div>
                                    </div>

                                </div>


                            </div>


                            <div class="chat-creating__container-msg right">
                                <div class="message">
                                    <div class="message-img"><Girl /></div>

                                    <div class="wrapper-bubble">
                                        <div class="message-bubble">Lorem ipsum dolor sit.</div>
                                        <div class="message-bubble">Lorem ipsum dolor sitdasdas.</div>
                                        <div class="message-bubble">Lorem ipsum dolor sitdasdassitdasdassitdasdas.</div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* <!-- /Box chats canais --> */}

                        <div class="side-right">

                            <div class="container-actions right">
                                <div class="wrapper-actions">
                                    <div class="bubble-tap">Tap Here</div>
                                    <div class="box-actions">
                                        <div class="box-actions__content">
                                            <div class="title">Mensagem</div>
                                            <div class="container-message">
                                                <textarea name="" id=""></textarea>
                                                <div class="container-message__emojis">
                                                    <div class="container-message__emojis__icon"><Emoji /></div>

                                                    <div class="list-emoji">


                                                        <div class="list-emoji__header">
                                                            <div class="search">
                                                                <div class="search__btn">
                                                                    <Search />
                                                                </div>
                                                                <input class="search__input" placeholder="Busca" />
                                                            </div>
                                                        </div>


                                                        <div class="list-emoji__favorite">
                                                            <div class="title">Favoritos</div>
                                                            <div class="list-emoji__content-emoji">
                                                                <button>😃</button>
                                                                <button>😄</button>
                                                                <button>😂</button>
                                                                <button>😊</button>
                                                                <button>🤩</button>
                                                                <button>😎</button>
                                                                <button>😍</button>
                                                            </div>

                                                        </div>

                                                        <div class="list-emoji__general">
                                                            <div class="title">Geral</div>
                                                            <div class="list-emoji__content-emoji">
                                                                <button>😀</button>
                                                                <button>😁</button>
                                                                <button>😂</button>
                                                                <button>🤣</button>
                                                                <button>😃</button>
                                                                <button>😄</button>
                                                                <button>😅</button>
                                                                <button>😆</button>
                                                                <button>😉</button>
                                                                <button>😊</button>
                                                                <button>😋</button>
                                                                <button>😎</button>
                                                                <button>😍</button>
                                                                <button>😘</button>
                                                                <button>😗</button>
                                                                <button>😙</button>
                                                                <button>😚</button>
                                                                <button>🙂</button>
                                                                <button>🤗</button>
                                                                <button>🤩</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <span class="info">Press <span class="info__enter"> ↩︎ </span> add a synonym</span>
                                            <div class="box-actions__content">
                                                <div class="title">Adicionar objeto</div>

                                                <div class="container-select active">
                                                    <button class="select-btn">Selecionar Objeto<i class="material-icons">chevron_right</i></button>
                                                    <div class="list-drop list-drop--primary">
                                                          {/*  {/* <!-- Item --> */} */}

                                                        <div class="list-drop__item audio"><a href="#">
                                                                <img src={Volume} />
                                                                Audio</a>
                                                        </div>

                                                        {/* <!-- end item --> */}

                                                         {/* <!-- Item --> */}
                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Image} alt="" />
                                                                Imagem</a>
                                                        </div>
                                                        {/* <!-- end item --> */}

                                                         {/* <!-- Item --> */}
                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Video} alt="" />
                                                                Vídeo</a>
                                                        </div>
                                                        {/* <!-- end item --> */}


                                                         {/* <!-- Item --> */}
                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Attachment2} alt="" />
                                                                Arquivo</a>
                                                        </div>
                                                        {/* <!-- end item --> */}

                                                         {/* <!-- Item --> */}
                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Attribute} alt="" />
                                                                Atributo</a>
                                                        </div>
                                                        {/* <!-- end item --> */}

                                                         {/* <!-- Item --> */}
                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Outlined} alt="" />
                                                                Localização</a>
                                                        </div>
                                                        {/* <!-- end item --> */}


                                                        <div class="list-drop__item"><a href="#">
                                                                <img src={Clock1} alt="" />
                                                                Tempo</a>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="wrapper-midia">

                                                    <div class="box-actions__content__midia-name active">
                                                        <div class="text">SampleVideo.mp4</div>

                                                        <span class="icon-Trash"></span>
                                                    </div>


                                                    <div class="box-actions__content__main">

                                                        <div class="uploading-midia active">
                                                            <div class="uploading-midia__progressbar-track">
                                                                <div class="uploading-midia__progressbar-bulet" style={{width:'62%'}}></div>
                                                            </div>

                                                            <div class="text">Uploading...<span class="icon-Close"></span></div>
                                                        </div>


                                                        <div class="replace-midia">
                                                            <div class="text">Replace <span class="icon-Refresh"></span></div>

                                                        </div>

                                                        <div class="box-actions__content__main__item">

                                                            <video controls></video>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="wrapper-midia">

                                                    <div class="box-actions__content__midia-name active">
                                                        <div class="text">SampleImage.png</div>

                                                        <span class="icon-Trash"></span>
                                                    </div>



                                                    <div class="box-actions__content__main">

                                                        <div class="uploading-midia">
                                                            <div class="uploading-midia__progressbar-track">
                                                                <div class="uploading-midia__progressbar-bulet" style={{width:'62%'}}></div>
                                                            </div>

                                                            <div class="text">Uploading...<span class="icon-Close"></span></div>
                                                        </div>


                                                        <div class="replace-midia active">
                                                            <div class="text">Replace <span class="icon-Refresh"></span></div>

                                                        </div>

                                                        <div class="box-actions__content__main__item">
                                                            <img src="https://s2.glbimg.com/Hhj_IrDHniT5ySukJJ2NPHx54A0=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/B/B/ICwCpATk2ABRwPr12spw/whatsapp-image-2017-07-30-at-09.46.06.jpeg" alt="" />


                                                            {/* <!-- <video controls></video> --> */}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>



                                            <button class="btn btn--primary">Done</button>
                                        </div>
                                    </div>
                                    <div class="photo"><Girl /></div>

                                </div>

                                <div onClick={() => changeScreenHeader('diagram')} class="btn-flow"><Tree />Trace Path</div>
                            </div>

                        </div>


                        </div>
                </div>                                                       
          </div>
  );
}
