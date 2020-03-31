import React from "react";
import { connect } from "react-redux";
import {ReactComponent as I} from "../../build/images/i.svg"
import {ReactComponent as Overflow} from "../../build/images/overflow.svg"

const FinishBlock = () => {
  return (
        <React.Fragment>
           <div class="constructor__container-start" id="finish-block">
              <div class="constructor__container-start__header">
                <div class="title">
                  Finalizar
                </div>
                <div class="constructor__container-start__header__actions">
                  <div class="icon"><I /></div>
                  <div class="icon"><Overflow /></div>
                </div>
              </div>

              
              <div class="constructor__container-start__main finish-container">

                <div class="constructor__container-start__input">
                  <input type="text" name="" placeholder="This block ends the flow in its current state" />
                </div>

              </div>


            </div>
        </React.Fragment>
           
  );
};

export default connect(null, null)(FinishBlock);