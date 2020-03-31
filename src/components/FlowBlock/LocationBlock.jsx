import React from "react";
import { connect } from "react-redux";
import {ReactComponent as I} from "../../build/images/i.svg"
import {ReactComponent as Overflow} from "../../build/images/overflow.svg"

const LocationBlock = () => {
  return (
        <React.Fragment>
          <div class="constructor__container-start" id="location-block">
                  <div class="constructor__container-start__header">
                    <div class="title">
                      Localização
                    </div>
                    <div class="constructor__container-start__header__actions">
                      <div class="icon"><I /></div>
                      <div class="icon"><Overflow /></div>
                    </div>
                  </div>


                  <div class="constructor__container-start__main">
                    <div class="subtitle-conf">
                      <div class="constructor__container-start__content__header__text">Place</div>
                    </div>

                    <div class="constructor__container-start__input active">
                      <input type="text" name="" />
                      <img src="../../build/images/search.svg" />

                      {/* <!-- Lista de resultados --> */}
                      <div class="list-drop list-drop--primary">
                        <div class="subtitle-conf">
                          <div class="constructor__container-start__content__header__text">Resultados</div>

                        </div>

                        <div class="list-drop__item">Cantina da lua</div>
                        <div class="list-drop__item">Cantina da lua 2</div>
                        <div class="list-drop__item">Cantina da lua 3</div>
                        <div class="list-drop__item">Cantina da lua 4</div>

                      </div>


                      <button class="btn btn--primary">Done</button>
                    </div>

                    <div class="location-container">

                      <div class="location-map">
                      </div>
                      <span class="info">Drag the map to pin point the exact location</span>
                    </div>

                    <div class="full-location">
                      <div class="subtitle-conf">
                        <div class="constructor__container-start__content__header__text">Localização Completa</div>
                      </div>

                      <div class="full-location__inputs">
                        <input type="text" placeholder="-12.987001" />
                        <input type="text" placeholder="-38.448501" />
                      </div>

                      <textarea name="" id="" placeholder="Endereço completo"></textarea>

                      <div class="checkbox checkbox__list">
                        {/* <!--Item--> */}
                        <div class="checkbox__list__item">

                          <input class="checkbox__list__input" id="" type="checkbox" value="" />
                          <label for="">Include Tiny URL</label>

                        </div>
                        {/* <!-- /item --> */}



                      </div>
                    </div>


                  </div>


                </div>
        </React.Fragment>
           
  );
};

export default connect(null, null)(LocationBlock);