import React from "react";
import { connect } from "react-redux";
import { showModalAdd } from "./../../store/modal/modal.actions";
import MicroModal from "micromodal";
import FoldresContentItem from "../misc/FoldresContentItem";
import FlowListItem from "../misc/FlowListItem";

MicroModal.init();

const SiteMapComponent = props => {
  const handleAddFolder = () => {
    props.showModalAdd();
    MicroModal.show("modal-component");
  };

  return (
    <div className="main__body">
      <div className="flex__row">
        <div className="flex__cell flex__cell--4">
          <div className="path-title">
            <div className="path-title__title">
              <div className="bodyText">Pastas</div>
            </div>
            <div
              className="path-title__icon"
              data-custom-open="add-folder"
              onClick={handleAddFolder}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
              >
                <path
                  className="a"
                  d="M14,12.5H13v-1a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm5-7H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z"
                  transform="translate(-2 -2.5)"
                ></path>
              </svg>
            </div>
          </div>
          {/* CARDS */}
          <div className="card card--fluxo">
            <div className="foldres">
              <div className="foldres__content">
                <FoldresContentItem />
              </div>
            </div>
          </div>
        </div>
        <div className="flex__cell flex__cell--8">
          <div className="path-title">
            <div className="path-title__title">
              <div className="bodyText">Delph</div>
            </div>
          </div>
          <div className="card card--fluxo">
            <div className="flow-list">
              <div className="flow-list__header">
                <div className="flow-list__item">
                  <div className="flow-list__item__status"></div>
                  <div className="flow-list__item__name">Nome</div>
                  <div className="flow-list__item__canal">Canal</div>
                  <div className="flow-list__item__creating">Criado</div>
                  <div className="flow-list__item__date">Modificado</div>
                  <div className="flow-list__item__action"></div>
                </div>
              </div>
              <div className="flow-list__body">
                {/* RENDER LIST */}
                <FlowListItem enable={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = ({ modalReducer }) => ({
// });

const mapDispatchToProps = dispatch => ({
  showModalAdd: () => dispatch(showModalAdd())
});

export default connect(null, mapDispatchToProps)(SiteMapComponent);
