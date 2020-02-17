import React from "react";
import { connect } from "react-redux";
import { showModalFluxo } from "./../store/modal/modal.actions";
import MicroModal from "micromodal";
import SubPageHeader from "../components/misc/SubPageHeader";
import SiteMapComponent from "../components/SiteMap/SiteMapComponent";

MicroModal.init();

const SiteMap = props => {
  const handleActionBtn = () => {
    props.showModalFluxo();
    MicroModal.show("modal-component");
  };

  return (
    <React.Fragment>
      <SubPageHeader
        title="Fluxos"
        actionEnabled={true}
        actionBtnLabel="Criar novo fluxo"
        extraClasses="search--fluxo"
        onActionBtn={handleActionBtn}
        withButton={true}
      />
      <SiteMapComponent />
    </React.Fragment>
  );
};

const mapStateToProps = ({ modalReducer }) => ({
  modal: modalReducer
});

const mapDispatchToProps = dispatch => ({
  showModalFluxo: () => dispatch(showModalFluxo())
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteMap);
