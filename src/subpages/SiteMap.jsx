import React from "react";
import { connect } from "react-redux";
import { showModalFluxo } from "./../store/modal/modal.actions";
import MicroModal from "micromodal";
import SubPageHeader from "../components/misc/SubPageHeader";
import SiteMapComponent from "../components/SiteMap/SiteMapComponent";
import ChatPanel from "../components/ChatPanel/ChatPanel";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";
import Modal from "../components/modal/Modal";

MicroModal.init();

const SiteMap = props => {
  const handleActionBtn = () => {
    props.showModalFluxo();
    MicroModal.show("modal-component");
  };

  return (
          <div className="container">
                <SideMenu />
                  <div className="container__content">
                      <Header />
                      <div className="container__content__body">
                          <div className="flex container__content__body--absolute">
                            <div className="flex__container">
                              <div className="main">
                                <SubPageHeader
                                  title="Fluxos"
                                  actionEnabled={true}
                                  actionBtnLabel="Criar novo fluxo"
                                  extraClasses="search--fluxo"
                                  onActionBtn={handleActionBtn}
                                  withButton={true}
                                />
                                <SiteMapComponent />
                                </div>
                            <Modal />
                          </div>
                      </div>
                  </div>
                  <ChatPanel />
              </div>
          </div>
  );
};

const mapStateToProps = ({ modalReducer }) => ({
  modal: modalReducer
});

const mapDispatchToProps = dispatch => ({
  showModalFluxo: () => dispatch(showModalFluxo())
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteMap);
