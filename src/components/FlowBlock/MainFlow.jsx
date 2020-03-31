import React, { useState } from "react";
import { connect } from "react-redux";
import {ReactComponent as Blocks} from "../../build/images/blocks.svg" 
import {ReactComponent as Variables} from "../../build/images/variables.svg"
import {ReactComponent as Tree} from "../../build/images/tree.svg"
import {ReactComponent as Linear} from "../../build/images/linear.svg"
import  Open from "../../build/images/open.svg"
import {ReactComponent as Menu} from "../../build/images/menu.svg"
import {ReactComponent as Magnifying_Glass} from "../../build/images/magnifying-glass.svg"
import {ReactComponent as Home} from "../../build/images/home.svg"
import {ReactComponent as Message} from "../../build/images/message.svg"

const MainFlow = () => {
  const [main, changeMain]        = useState(true);
  const [screen, changeScreen]    = useState('block');
  
  return (
        <React.Fragment>
            <div class="constructor__menu">
                 <div class="constructor__content-menu ">
                    <div class={main ? "constructor__content-menu__menu active":"constructor__content-menu__menu"} onClick={event => changeMain(false)}>
                      <div class="constructor__content-menu__menu__items">
                        <div class="constructor__content-menu__menu__items__item"></div>
                      </div>
                    </div>
                  <div class={main ? "constructor__content-menu__menu-open":"constructor__content-menu__menu-open active"}>
                    <div class="constructor__content-menu__menu-open__items">
                      <div onClick={event => changeScreen('block')} class={screen === 'block' ? 'constructor__content-menu__menu-open__items__item block active':'constructor__content-menu__menu-open__items__item block'}><Blocks /></div>
                      <div onClick={event => changeScreen('variable')} class={screen === 'variable' ? 'constructor__content-menu__menu-open__items__item variable active':'constructor__content-menu__menu-open__items__item variable'}><Variables /></div>
                      <div onClick={event => changeScreen('tree')} class={screen === 'tree' ? 'constructor__content-menu__menu-open__items__item tree active':'constructor__content-menu__menu-open__items__item tree'}><Tree /></div>
                      <div onClick={event => changeScreen('linear')} class={screen === 'linear' ? 'constructor__content-menu__menu-open__items__item linear active':'constructor__content-menu__menu-open__items__item linear'}><Linear /></div>
                    </div>
                  </div>

                  <div class="container-blocks " class={main ? "container-blocks":"container-blocks active"} onClick={event => changeMain(true)}>

                      <div class="opener" onClick={event => changeMain(true)}>
                        <img src={Open} />
                      </div>

                      <div class={screen === 'block' ? "nav nav--block active":"nav nav--block"}>
                        <div class="header-block">
                          <div class="title">Navegação Bloco</div>
                          {/* <!-- <div class="add-button">+</div> --> */}
                        </div>
                        <div class="search">
                          <input class="search__input" placeholder="Busca" />
                          <div class="search__btn">
                            <Magnifying_Glass />
                          </div>
                        </div>

                        <div class="block-content">
                          <div class="block-content__icons">
                            <div class="block-content__icons__icon"> <Home /> </div>
                            <div class="block-content__icons__icon"> <Message /></div>
                          </div>
                          <div class="block-content__text">Começar o fluxo</div>
                        </div>

                      </div>
                      <div class={screen === 'variable' ? "nav nav--variable active":"nav nav--variable"}>
                        <div class="header-variable">
                          <div class="title">Variável</div>
                          {/* <!-- <div class="add-button">+</div> --> */}

                        </div>

                        <div class="variable__creating">
                          <div class="sub-title">Criar variável</div>
                          <div class="variable__creating__area-input">
                            <div class="variable__creating__area-input__icon"><Variables /></div>
                            <input class="variable__creating__area-input__input" type="text" placeholder="Variável nome" />
                          </div>
                          <div class="variable__creating__text">Pressione <span>ENTER</span> para criar variáveis</div>
                        </div>
                        <div class="variable__created">
                            <div class="sub-title">Váriaveis criadas 
                                <div class="sub-title__btn-menu" onclick="showModal('variables-modal')">
                                    <Menu />
                                </div>
                            </div>
                            {/* <!-- Item inicio --> */}
                            <div class="variable__created__items">
                                    <div class="variable__created__items__item"><i class="material-icons">close</i>
                                      <div class="item-variable">{<span>email</span>}</div>
                                    </div>
                                    {/* <!-- Item Fim --> */} 


                                    {/* <!-- Item inicio --> */}
                                    <div class="variable__created__items__item"><i class="material-icons">close</i>
                                      <div class="item-variable">{<span>telefone</span>}</div>
                                    </div>
                                  {/* <!-- Item Fim --> */}


                                    {/* <!-- Item inicio --> */}

                                    <div class="variable__created__items__item"><i class="material-icons">close</i>
                                      <div class="item-variable">{<span>id</span>}</div>
                                    </div>
                                    {/* <!-- Item Fim --> */}

                                    {/* <!-- Item inicio --> */}
                                    <div class="variable__created__items__item"><i class="material-icons">close</i>
                                      <div class="item-variable">{<span>sessions</span>}</div>
                                    </div>
                                    {/* <!-- Item Fim --> */}

                                    {/* <!-- Item inicio --> */}
                                    <div class="variable__created__items__item"><i class="material-icons">close</i>
                                      <div class="item-variable">{<span>user_id</span>}</div>
                                    </div>
                                    {/* <!-- Item Fim --> */}

                                    {/* <!-- Item inicio --> */}
                                    <div class="variable__created__items__item"><i class="material-icons">close</i>
                                      <div class="item-variable">{<span>address</span>}</div>
                                    </div>
                              </div>
                            {/* <!-- Item Fim --> */}
                        </div>
                      </div>
                      <div class={screen === 'tree' ? "nav nav--tree active":"nav nav--tree"}>
                          <div class="header-block">
                            <div class="title">Navegação Árvore</div>
                            {/* <!-- <div class="add-button">+</div> --> */}
                          </div>
                        </div>
                      <div class={screen === 'linear' ? "nav nav--linear active":"nav nav--linear"}>
                      <div class="header-block">
                        <div class="title">Navegação Linear</div>
                        {/* <!-- <div class="add-button">+</div> --> */}
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </React.Fragment>
           
  );
};

export default connect(null, null)(MainFlow);