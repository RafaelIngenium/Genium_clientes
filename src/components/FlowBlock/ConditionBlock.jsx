import React from "react";
import { connect } from "react-redux";
import {ReactComponent as I} from "../../build/images/i.svg"
import {ReactComponent as Overflow} from "../../build/images/overflow.svg"
import {ReactComponent as Information} from "../../build/images/information.svg"
import {ReactComponent as Equals} from "../../build/images/equals.svg"
import {ReactComponent as Delete} from "../../build/images/delete.svg"
import {ReactComponent as And} from "../../build/images/and.svg"
import {ReactComponent as Variables} from "../../build/images/variables.svg"
import {ReactComponent as More} from "../../build/images/more.svg"
import Mascot from "../../build/images/genium-mascot.png"

const ConditionBlock = () => {
  return (
    <React.Fragment>
        <div class="constructor__container-start" id="condition-block">
          <div class="constructor__container-start__header">
            <div class="title">
              Condição
              <div class="title-img"> <img src={Mascot} alt="" /> Bot Resposta</div>
            </div>
            <div class="constructor__container-start__header__actions">
              <div class="icon"><I /></div>
              <div class="icon"><Overflow /></div>
            </div>
          </div>
          <div class="constructor__container-start__main">
        
            <div class="title-main">
              <div class="number-title">1</div>
            </div>
        
            <div class="condition-view">
              {/* <div class="condition-view__content"><div class="var">{'sessions_id'}</div> <span class="param">&</span>
                <div class="var">{'user_id'}</div><span class="next-var"></span> */}
              </div>
            </div>
        
            <div class="define-condition-container">
        
              {/* <!-- Wapper conditionals --> */}
              <div class="wrapper-conditionals active">
        
                <div class="buttom-var">
        
                  <img src="../../build/images/variables.svg" alt="var" /> sessions_id
                  <div class="var-list">
                    <div class="list-drop list-drop--primary">
        
                      <div class="list-drop__title">
                        Variáveis <img src={Information} alt="" />
                      </div>
                      <div class="list-drop__item">sessions_id</div>
                      <div class="list-drop__item">user_id</div>
                    </div>
                  </div>
        
                </div>
        
        
                <div class="container-conditionals">
                  {/* <!-- condicionais --> */}
                  <div class="conditionals">
                    <img src={Equals} alt="igual" /> Igual a
                    <div class="delete"><img src={Delete} alt="" /></div>
                  </div>
        
                </div>
                {/* <!-- Input condition --> */}
                <div class="condition-input">
                  <input type="text" value="3" />
                  <img src={More} />
                </div>
        
                {/* <!-- Lista de condições --> */}
                <div class="list-drop list-drop--primary list-operators">
        
                  <div class="list-drop__title">
                    Compare <img src={Information} alt="" />
                  </div>
        
        
                  <div class="list-drop__item">
                    Igual a <span>=</span>
                  </div>
        
                  <div class="list-drop__item">
                    Maior que <span>></span>
                  </div>
        
                  <div class="list-drop__item">Menor que
                    <span> </span>
                      </div> <div class="list-drop__title">
                        Operador bit a bit <img src={Information} alt="" />
                  </div>
        
                  <div class="list-drop__item">
                    E <span>&</span>
                  </div>
        
                  <div class="list-drop__item">
                    Ou <span>|</span>
                  </div>
        
                  <div class="list-drop__item">
                    Não <span>~</span>
                  </div>
        
        
                  <div class="list-drop__title">
                    Outros <img src={Information} alt="" />
                  </div>
        
                  <div class="list-drop__item">
                    Selecione uma variável
                  </div>
        
                  <div class="list-drop__item">
                    Inserir um valor
                  </div>
                </div>
        
                <div class="var-list">
                  <div class="list-drop list-drop--primary">
        
                    <div class="list-drop__title">
                      Variáveis <img src={Information} alt="" />
                    </div>
                    <div class="list-drop__item">sessions_id</div>
                    <div class="list-drop__item">user_id</div>
                  </div>
                </div>
              </div>
        
        
              {/* <!-- Operador--> */}
              <div class="conditional-operator active"><img src={And} alt="" />E
              </div>
        
              {/* <!-- Wapper conditionals --> */}
              <div class="wrapper-conditionals active">
        
                <div class="buttom-var">
        
                  <img src={Variables} alt="var" /> sessions_id
                  <div class="var-list">
                    <div class="list-drop list-drop--primary">
        
                      <div class="list-drop__title">
                        Variáveis <img src={Information} alt="" />
                      </div>
                      <div class="list-drop__item">sessions_id</div>
                      <div class="list-drop__item">user_id</div>
                    </div>
                  </div>
        
                </div>
        
        
                <div class="container-conditionals">
                  {/* <!-- condicionais --> */}
                  <div class="conditionals">
                    <img src={Equals} alt="igual" /> Igual a
                    <div class="delete"><img src={Delete} alt="" /></div>
                  </div>
                </div>
        
                <div class="condition-input">
                  <input type="text" value="3" />
                  <img src={More} />
                </div>
        
                {/* <!-- Lista de condições --> */}
                <div class="list-drop list-drop--primary">
        
                  <div class="list-drop__title">
                    Compare <img src={Information} alt="" />
                  </div>
        
        
                  <div class="list-drop__item">
                    Igual a <span>=</span>
                  </div>
        
                  <div class="list-drop__item">
                    Maior que <span>></span>
                  </div>
        
                  <div class="list-drop__item">Menor que
                    <span>
                    </span> </div> <div class="list-drop__title">
                        Operador bit a bit <img src={Information} alt="" />
                  </div>
        
                  <div class="list-drop__item">
                    E <span>&</span>
                  </div>
        
                  <div class="list-drop__item">
                    Ou <span>|</span>
                  </div>
        
                  <div class="list-drop__item">
                    Não <span>~</span>
                  </div>
        
        
                  <div class="list-drop__title">
                    Outros <img src={Information} alt="" />
                  </div>
        
                  <div class="list-drop__item">
                    Selecione uma variável
                  </div>
        
                  <div class="list-drop__item">
                    Inserir um valor
                  </div>
                </div>
        
        
              </div>
        
            </div>
        
          <div class="add-if">
            <button>Add if statement</button>
          </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, null)(ConditionBlock);