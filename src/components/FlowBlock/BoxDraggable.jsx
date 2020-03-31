import React from "react";
import { connect,useSelector } from "react-redux";
import {ReactComponent as Earth} from "../../build/images/earth.svg"
import {ReactComponent as Home2} from "../../build/images/home(2).svg"
import {ReactComponent as If_Else} from "../../build/images/if-else.svg"
import {ReactComponent as Outlined} from "../../build/images/outlined.svg"
import {ReactComponent as End} from "../../build/images/end.svg"
import {ReactComponent as Support} from "../../build/images/support.svg"
import {ReactComponent as Notes} from "../../build/images/notes.svg"

const BoxDraggable = () => {
  return (
    <React.Fragment>
          <div class="box-draggable" style={{left: '80%'}}>
          <div class="box-draggable__header">
              <div class="box-status"></div>
              <div class="box-draggable__header__top">
                  <Home2 /> Começar Fluxo
              </div>
          </div>
          <div class="box-draggable__main">

              <div class="box-draggable__main__message"><img src="../../build/images/notes.svg" alt="" /> Bem vindo ao seu primeiro fluxo</div>



              <div class=" box-draggable__main__connector box-draggable__main__connector--right"></div>
          </div>

      </div>


      <div class="box-draggable box-draggable--status-integration" id="draggable-integrations">

          <div class="box-draggable__header">
              <div class="box-status"></div>
              <div class="box-draggable__header__top">
                  <Earth /> Chamada do Servidor
              </div>
          </div>
          <div class="box-draggable__main">
              <div class="box-draggable__main__connector box-draggable__main__connector--left"></div>
              <div class="box-draggable__main__connector box-draggable__main__connector--right"></div>
          </div>

      </div>


      <div class="box-draggable box-draggable--status-location" id="draggable-location">

          <div class="box-draggable__header">
              <div class="box-status"></div>
              <div class="box-draggable__header__top">
                  <Outlined /> Localização
              </div>
          </div>
          <div class="box-draggable__main">
              <div class="box-draggable__main__connector box-draggable__main__connector--left"></div>
              <div class="box-draggable__main__connector box-draggable__main__connector--right"></div>
          </div>

      </div>


      <div class="box-draggable box-draggable--status-start" id="draggable-start">
          <div class="box-draggable__header">
              <div class="box-status"></div>
              <div class="box-draggable__header__top">
                    <Home2 />  Começar Fluxo
              </div>
          </div>
          <div class="box-draggable__main">
              <div class="box-draggable__main__message"><img src={Notes} alt="" /> Bem vindo ao seu primeiro fluxo</div>

              <div class="box-draggable__main__connector box-draggable__main__connector--right"></div>
          </div>
      </div>


      <div class="box-draggable box-draggable--status-condition" id="draggable-condition">
          <div class=" box-draggable__header">
              <div class="box-status"></div>
              <div class="box-draggable__header__top">
                  <If_Else /> Condição
              </div>
          </div>
          <div class="box-draggable__main">

              <div class="box-draggable__main__connector box-draggable__main__connector--left">
              </div>

              <div class="box-draggable__main__connector box-draggable__main__connector--no" id="connetorStart">
                  <div class="box-draggable__main__connector__item">Não</div>
              </div>

              <div class="box-draggable__main__connector box-draggable__main__connector--yes">
                  <div class="box-draggable__main__connector__item">Sim</div>
              </div>

          </div>
      </div>


      <div class="box-draggable box-draggable--status-fim" id="draggable-fim">

          <div class="box-draggable__header">
              <div class="box-status"></div>
              <div class="box-draggable__header__top">
                  <End /> Finalizar
              </div>
          </div>
          <div class="box-draggable__main">
              <div class="box-draggable__main__connector box-draggable__main__connector--left"></div>
          </div>

      </div>


      <div class="box-draggable box-draggable--status-call-agent" id="draggable-call">

          <div class="box-draggable__header">
              <div class="box-status"></div>
              <div class="box-draggable__header__top">
                  <Support />
                  Ligue para um agente
              </div>
          </div>
          <div class="box-draggable__main">
              <div class="box-draggable__main__connector box-draggable__main__connector--left" id="connetorEnd"></div>
          </div>

      </div>
    </React.Fragment>
  );
};

export default connect(null, null)(BoxDraggable);