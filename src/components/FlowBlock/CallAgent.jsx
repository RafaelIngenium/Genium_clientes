import React from "react";
import { connect,useSelector } from "react-redux";
import {ReactComponent as I} from "../../build/images/i.svg"
import {ReactComponent as Overflow} from "../../build/images/overflow.svg"

const CallAgent = () => {
  return (
            <div class="constructor__container-start" id="call-agent">
            <div class="constructor__container-start__header">
              <div class="title">
                Chamada para o agente
              </div>
              <div class="constructor__container-start__header__actions">
                  <div class="icon"><I /></div>
                  <div class="icon"><Overflow /></div>
              </div>
            </div>

            {/* <!-- Link reach --> */}
            <div class="constructor__container-start__main" id="linkToReach">

              <div class="subtitle-conf">
                <div class="constructor__container-start__content__header__text">Link to reach</div>

              </div>

              <div class="constructor__container-start__input">
                <input type="text" name="" />
              </div>

            </div>
            {/* <!-- /Link reach --> */}

            <div class="constructor__container-start__main" id="events">
              <div class="subtitle-conf">
                <div class="constructor__container-start__content__header__text">Eventos</div>
              </div>
              {/* <!-- checkbox --> */}

              <div class="checkbox checkbox__list">
                {/* <!--Item--> */}
                <div class="checkbox__list__item">

                  <input class="checkbox__list__input" id="onMessage" type="checkbox" value="" />
                  <label for="onMessage">On Message</label>

                </div>
                {/* <!-- /item -->
                <!--Item--> */}
                <div class="checkbox__list__item">

                  <input class="checkbox__list__input" id="onVariable" type="checkbox" value="" />
                  <label for="onVariable">On Variable Update</label>

                </div>
                {/* <!-- /item -->

                <!--Item--> */}
                <div class="checkbox__list__item">

                  <input class="checkbox__list__input" id="onEvent" type="checkbox" value="" />
                  <label for="onEvent">On Event</label>

                </div>
                {/* <!-- /item --> */}


              </div>
              {/* <!-- /Checkbox --> */}

            </div>

            <div class="constructor__container-start__main" id="client">

              <div class="subtitle-conf">
                <div class="constructor__container-start__content__header__text">Cliente ID</div>
              </div>

              <div class="constructor__container-start__input">
                <input type="text" name="" />
              </div>

            </div>

            </div>
  );
};

export default connect(null, null)(CallAgent);