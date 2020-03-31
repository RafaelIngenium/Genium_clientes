import React from "react";
import { connect } from "react-redux";
import {ReactComponent as I} from "../../build/images/i.svg"
import {ReactComponent as Overflow} from "../../build/images/overflow.svg"
import checkmark from "../../build/images/checkmark.svg"
import {ReactComponent as Loop} from "../../build/images/loop.svg"
import {ReactComponent as Add} from "../../build/images/add.svg"
import {ReactComponent as Arrow} from "../../build/images/arrow.svg"
import {ReactComponent as Home2} from "../../build/images/home(2).svg"
import {ReactComponent as More} from "../../build/images/more.svg"

const IntegrationFlow = () => {
  return (
        <React.Fragment>
            <div class="constructor__container-start" id="integrations">
                  <div class="constructor__container-start__header">
                    <div class="title">
                      Integrações Blocos
                      <div class="title-img"> <img src="../../build/images/genium-mascot.png" alt=""  /> Bot Resposta</div>
                    </div>
                    <div class="constructor__container-start__header__actions">
                      <div class="icon"><I /></div>
                      <div class="icon"><Overflow /></div>
                    </div>
                  </div>
                  <div class="constructor__container-start__main">

                    <div class="subtitle-conf">
                      <div class="constructor__container-start__content__header__text">O pedido deve ser</div>
                      <div class="icon icon--icon-small"><I /></div>
                    </div>
                    <div class="constructor__content request active">
                      <div class="container-select">
                        <button class="select-btn"><span id="pedido">POST</span> <i class="material-icons">chevron_right</i></button>
                        <div class="list-drop list-drop--primary">
                          {/* <!-- Item --> */}

                          <div class="list-drop__item" onclick="onGet();">
                            <span id="get">GET</span> <img src={checkmark} alt="" />
                          </div>

                          {/* <!-- end item --> */}

                          {/* <!-- Item --> */}
                          <div class="list-drop__item" onclick="onPost();">
                            <span id="post">POST</span> <img src={checkmark} alt="" />
                          </div>
                          {/* <!-- end item --> */}

                          {/* <!-- Item --> */}
                          <div class="list-drop__item" onclick="onPut();">
                            <span id="put">PUT</span> <img src={checkmark} alt="" />
                          </div>
                          {/* <!-- end item --> */}


                          {/* <!-- Item --> */}
                          <div class="list-drop__item" onclick="onPatch()">
                            <span id="patch">PATCH</span> <img src={checkmark} alt="" />
                          </div>
                          {/* <!-- End item --> */}

                          {/* <!-- Item --> */}
                          <div class="list-drop__item" onclick="onDelete();">
                            <span id="delete">POST</span> <img src={checkmark} alt="" />
                          </div>
                          {/* <!-- End item --> */}




                        </div>
                      </div>

                      <a href="#" class="btn btn--secondary ">Próximo</a>
                    </div>


                  </div>
                  <div class="constructor__container-start__main">
                    <div class="subtitle-conf">
                      <div class="constructor__container-start__content__header__text">Com URL</div>
                      <div class="icon icon--icon-small"><I /></div>
                    </div>

                    <div class="constructor__content url">
                      <div class="input-dashed">
                        <input type="text" name="" id="" placeholder="Digite a url aqui" />
                        <div class="input-dashed__icon"><Loop /></div>
                      </div>

                      <div class="constructor__nav">
                        <div class="constructor__nav__item param-header active">
                          <div class="constructor__nav__item__text">Header</div>
                        </div>
                        <div class="constructor__nav__item param-body">
                          <div class="constructor__nav__item__text">Body</div>
                        </div>
                        <div class="constructor__nav__item param-params">

                          <div class="constructor__nav__item__text">Parametros</div>
                        </div>
                      </div>

                      <div class="constructor__param-header active">
                        <div class="constructor__param-header__content">
                          <div class="constructor__param-header__content__number">1</div>
                          <div class="constructor__param-header__content__inputs">
                            <input type="text" name="key" id="" placeholder="Key" />
                            <input type="text" name="value" id="" placeholder="Value" />
                          </div>
                          <div class="constructor__param-header__content__close"><i class="material-icons">close</i> </div>
                        </div>

                        <a href="#" class="btn-add-block"> <Add /> Adicionar par</a>
                      </div>

                      <div class="constructor__param-body">
                        <div class="constructor__param-header__content">
                          <div class="constructor__param-header__content__number">1</div>
                          <div class="constructor__param-header__content__inputs">
                            <input type="text" name="key" id="" placeholder="Name" />
                            <input type="text" name="value" id="" placeholder="Value" />
                          </div>
                          <div class="constructor__param-header__content__close"><i class="material-icons">close</i> </div>
                        </div>

                        <a href="#" class="btn-add-block"> <Add /> Adicionar par</a>
                      </div>

                      <div class="constructor__param-params">
                        <div class="constructor__param-header__content">
                          <div class="constructor__param-header__content__number">1</div>
                          <div class="constructor__param-header__content__inputs">
                            <input type="text" name="key" id="" placeholder="Key" />
                            <input type="text" name="value" id="" placeholder="Value" />
                          </div>
                          <div class="constructor__param-header__content__close"><i class="material-icons">close</i> </div>
                        </div>

                        <a href="#" class="btn-add-block"> <Add /> Adicionar par</a>
                      </div>


                      <a href="#" class="btn btn--secondary ">Próximo</a>
                    </div>

                  </div>
                  <div class="constructor__container-start__content">
                    <div class="subtitle-conf">
                      <div class="constructor__container-start__content__header__text">Saída De Mapeamento</div>
                      <div class="icon icon--icon-small"><I /></div>
                    </div>
                    
                    <button class="btn btn--secondary" onclick="showModal('map-variables')">Map Variables</button>


                    <div class="constructor__content out-map">

                      <div class="container-select">
                        <button class="select-btn">Selecione uma variável<i class="material-icons">chevron_right</i></button>
                        <div class="list-drop list-drop--primary">
                          {/* <!-- Item --> */}
                          <div class="list-drop__item">
                            session_id
                          </div>
                          {/* <!-- end item --> */}

                          {/* <!-- Item --> */}
                          <div class="list-drop__item">
                            user_id
                          </div>
                          {/* <!-- end item --> */}

                          {/* <!-- Item --> */}
                          <div class="list-drop__item">
                            user_email
                          </div>
                          {/* <!-- end item --> */}
                        </div>
                      </div>

                      <div class="wrapper-map">
                              <div class="constructor__content__map">
                                <div class="list-drop__close__icon"><Arrow /></div>
                                <div class="constructor__content__map__text ">Map to</div>
                              </div>




                              <div class="map-var">
                                <div class="constructor__nav">
                                  <div class="constructor__nav__item integration-response active">
                                    <div class="constructor__nav__item__text ">Response</div>
                                  </div>
                                  <div class="constructor__nav__item integration-dataset">
                                    <div class="constructor__nav__item__text">Dataset</div>
                                  </div>
                                </div>

                              </div>

                              <div class="map-var__dataset">
                                <div class="map-var__dataset__content">
                                  <div class="map-var__dataset__content__line"><img src={Home2} />Root</div>
                                  <ul class="container-datasets">
                                    <li class="dataset-item show">
                                      <div class="title"><img src={More} />Response</div>
                                      <ul class="container-datasets ">
                                        <li class="dataset-item">testeItem</li>
                                        <li class="dataset-item">testeitem1</li>
                                        <li class="dataset-item show">
                                          <div class="title"><img src={More} />Image</div>
                                          <ul class="container-datasets">
                                            <li class="dataset-item">Url</li>
                                            <li class="dataset-item">title</li>
                                            <li class="dataset-item">display_location</li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </li>
                                    <li class="dataset-item show">
                                      <div class="title"><img src={More} />teste</div>
                                      <ul class="container-datasets ">
                                        <li class="dataset-item">testeItem</li>
                                        <li class="dataset-item">testeitem1</li>
                                        <li class="dataset-item show">
                                          <div class="title"><img src={More} />Image</div>
                                          <ul class="container-datasets">
                                            <li class="dataset-item">Url</li>
                                            <li class="dataset-item">title</li>
                                            <li class="dataset-item">display_location</li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                  </div>
              </div>
          </div>
        </React.Fragment> 
  );
};

export default connect(null, null)(IntegrationFlow);