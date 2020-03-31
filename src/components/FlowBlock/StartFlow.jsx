import React from "react";
import { connect,useSelector } from "react-redux";
import {ReactComponent as I} from "../../build/images/i.svg"
import {ReactComponent as Overflow} from "../../build/images/overflow.svg"
import Mascot from "../../build/images/genium-mascot.png"
import {ReactComponent as Add} from "../../build/images/add.svg"
import {ReactComponent as Arrow} from "../../build/images/arrow.svg"
import {ReactComponent as Messagem} from "../../build/images/messagem.svg"
import {ReactComponent as If_Else} from "../../build/images/if-else.svg"
import {ReactComponent as Earth} from "../../build/images/earth.svg"
import {ReactComponent as Support} from "../../build/images/support.svg"
import {ReactComponent as Outlined} from "../../build/images/outlined.svg"
import {ReactComponent as End} from "../../build/images/end.svg"
import {ReactComponent as Volume} from "../../build/images/volume.svg"
import Video from "../../build/images/video.svg"
import Attachment2 from "../../build/images/attachment2.svg"
import Attribute from "../../build/images/attribute.svg"
import {ReactComponent as Trash} from "../../build/images/trash.svg"

const FlowBlock = () => {
  return (
        <React.Fragment>
            <div class="constructor__container-start" id="start">
                <div class="constructor__container-start__header">
                  <div class="title">
                    Configurar o fluxo
                    <div class="title-img"> <img src={Mascot} alt="" /> Bot Resposta</div>
                  </div>
                  <div class="constructor__container-start__header__actions">
                    <div class="icon"><I /></div>
                    <div class="icon"><Overflow /></div>
                  </div>
                </div>
                {/* <!-- caixa para adicionar variáveis --> */}
                <div class="constructor__container-start__main">
                  <textarea class="constructor__container-start__main__textarea" placeholder="Diga ao bot oque dizer..."></textarea>

                  <p class="constructor__container-start__main__text">Pressione para adicionar variáveis.</p>
                </div>
                {/* // <!-- /caixa para adicionar variáveis -->

                // <!-- Adicionar resposta area --> */}
                <div class="constructor__container-start__content">
                  <div class="constructor__container-start__content__header">
                    <div class="constructor__container-start__content__header__text">Respostas</div>
                    <div class="icon icon--icon-small"><I /></div>
                  </div>

                  <div class="constructor__container-start__add-answer">
                    <div class="constructor__container-start__add-answer__header">
                      <div class="constructor__container-start__add-answer__header__number">1</div>
                      <div class="constructor__container-start__add-answer__header__close"><i class="material-icons">close</i></div>
                    </div>
                    <div class="constructor__container-start__input">


                      <input type="text" />
                    </div>
                    <div class="constructor__container-start__conect">
                      <div class="constructor__container-start__conect__header">
                        <div class="constructor__container-start__conect__header__icon">
                          <i class="material-icons">arrow_downward</i>
                        </div>
                        <div class="constructor__container-start__conect__header__text">
                          Conectar-se a
                        </div>
                      </div>
                      <div class="constructor__container-start__conect__select">
                        <div class="constructor__container-start__conect__select__text">Selecionar</div>
                        <div class="constructor__container-start__conect__select__icon"><i class="material-icons">keyboard_arrow_down</i></div>

                      </div>

                      <div class="constructor__container-start__conect__select__options">
                        <div class="constructor__container-start__conect__select__options__header">
                          <div class="constructor__container-start__conect__select__options__header__item option-a active">Blocos</div>
                          <div class="constructor__container-start__conect__select__options__header__item option-b">Fluxos</div>
                        </div>
                        {/* <!-- Blocos --> */}
                        <div class="constructor__container-start__conect__select__options__content-blocks active">
                          <div class="constructor__container-start__conect__select__options__content-blocks__add-block">
                            <a href="#" class="btn-add-block"> <Add /> Adicionar bloco</a>
                          </div>

                          <div class="list-drop list-drop--constructor-block">
                            <div class="list-drop__close">
                              <div class="list-drop__close__icon"><Arrow /></div>
                            </div>

                            <div class="list-drop__item" onclick="forStartItem()"><a href="#"><Messagem /> Mensagem</a></div>
                            <div class="list-drop__item" onclick="forConditionItem()"> <a href="#"> <If_Else /> Condição</a></div>
                            <div class="list-drop__item" onclick="forIntegrationItem()"><a href="#"><Earth />Integrações</a></div>
                            <div class="list-drop__item" onclick="forCallAgentItem()"><a href="#"><Support /> Suporte</a></div>
                            <div class="list-drop__item" onclick="forLocationItem()"><a href="#"><Outlined />Localização</a></div>
                            <div class="list-drop__item" onclick="forFinishItem() "><a href="#"><End />Finalização</a></div>

                          </div>
                        </div>


                        {/* <!-- /Blocos -->

                        <!-- Fluxos --> */}
                        <div class="constructor__container-start__conect__select__options__content-fluxos">
                          <div class="constructor__container-start__conect__select__options__content-fluxos__empty active">Sem fluxos no momento</div>
                        </div>
                      </div>


                    </div>

                  </div>
                  <div class="constructor__container-start__content__main">
                    <button class="btn-add-answer">
                      <Add />
                      <div class="btn-add-answer__text">Adicionar resposta</div>
                    </button>

                  </div>

                  {/* <!-- /Adicionar resposta area --> */}

                </div>
                <div class="constructor__container-start__content">
                  <div class="constructor__container-start__content__header">
                    <div class="constructor__container-start__content__header__text">Adicionar objeto</div>
                    <div class="icon icon--icon-small"><I /></div>

                  </div>


                  <div class="constructor__container-start__content__main constructor__container-start__content__main--column">
                    <div class="container-select active">
                      <button class="select-btn">Selecionar Objeto<i class="material-icons">chevron_right</i></button>
                      <div class="list-drop list-drop--primary">
                        {/* <!-- Item --> */}

                        <div class="list-drop__item audio"><a href="#">
                            <img src={Volume} alt="" />
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
                        {/* <!-- End item --> */}

                        {/* <!-- Item --> */}
                        <div class="list-drop__item"><a href="#">
                            <img src={Attribute} alt="" />
                            Atributo</a>
                        </div>
                        {/* <!-- End item --> */}

                        {/* <!-- Item --> */}
                        <div class="list-drop__item"><a href="#">
                            <img src={Outlined} alt="" />
                            Localização</a>
                        </div>
                        {/* <!-- End item --> */}


                      </div>
                    </div>

                    <div class="container-drag-drop">
                      <div class="container-drag-drop__text">Arraste e solte arquivos aqui</div>
                      <button class="btn btn--primary"> Adicionar Áudio</button>
                    </div>

                    <div class="container-result">
                      <div class="result">
                        <div class="result__content">
                          <div class="result__content__icon"><Volume /></div>
                          <div class="result__content__files">file.mp3</div>
                        </div>

                        <div class="result__exclude"><Trash /></div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
        </React.Fragment>
           
  );
};

export default connect(null, null)(FlowBlock);