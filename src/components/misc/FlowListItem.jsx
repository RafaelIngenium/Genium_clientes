import React from "react";
import { PopOver } from "../../utils/Typpy";
import { connect } from "react-redux";
import {
  showModalDelete,
  showModalMove,
  showModalEdit
} from "../../store/modal/modal.actions";
import MicroModal from "micromodal";
import { ReactComponent as DelIcon } from "../../build/images/del-alt.svg";
import { ReactComponent as MoveIcon } from "../../build/images/move-alt.svg";
import { ReactComponent as EditIcon } from "../../build/images/edit-alt.svg";
import { ReactComponent as DoubleIcon } from "../../build/images/double-alt.svg";

MicroModal.init();

const FlowListItem = props => {
  const handleActionItemClick = action => {
    switch (action) {
      case "delete":
        props.showModalDelete();
        MicroModal.show("modal-component");
        break;
      case "move":
        props.showModalMove();
        MicroModal.show("modal-component");
        break;
      case "edit":
        props.showModalEdit();
        MicroModal.show("modal-component");
        break;
      default:
        break;
    }
  };

  const renderPopOver = () => {
    return (
      <div className="context-menu" id="drop-options-modais">
        <div className="context-menu__list">
          <div className="options-change-action">
            <div
              className="options-change-action__item"
              // onclick="showModal('delete-folder')"
              onClick={() => handleActionItemClick("delete")}
              data-custom-open="delete-folder"
            >
              <DelIcon />
              Deletar
            </div>
            <div
              className="options-change-action__item"
              // onclick="showModal('move-folder')"
              onClick={() => handleActionItemClick("move")}
              data-custom-open="move-folder"
            >
              <MoveIcon />
              Mover
            </div>
            <div
              className="options-change-action__item"
              // onclick="showModal('edit-folder')"
              onClick={() => handleActionItemClick("edit")}
              data-custom-open="edit-folder"
            >
              <EditIcon />
              Editar
            </div>
            <div
              className="options-change-action__item"
              onClick={() => handleActionItemClick("double")}
            >
              <DoubleIcon />
              Duplicar
            </div>
          </div>
        </div>
      </div>
    );
  };

  const { enable } = props;

  return (
    <div className="flow-list__item">
      <div className="flow-list__item__status">
        <div
          className={
            enable
              ? "flow-list__item__status__item enable"
              : "flow-list__item__status__item disable"
          }
        ></div>
      </div>
      <div className="flow-list__item__name">Fluxo 1 vendas Chatbot</div>
      <div className="flow-list__item__canal">Canal</div>
      <div className="flow-list__item__creating">05/06/2019</div>
      <div className="flow-list__item__date">15/09/2019</div>
      <div className="flow-list__item__action">
        <PopOver content={renderPopOver()} placement={"bottom"}>
          <div
            className="flow-list__item__action__item tippy-context-menu "
            data-template="drop-options-modais"
            tabIndex="0"
          >
            <i className="material-icons">more_horiz</i>
          </div>
        </PopOver>
      </div>
    </div>
  );
};

const mapDipatchToProps = dispatch => ({
  showModalDelete: () => dispatch(showModalDelete()),
  showModalEdit: () => dispatch(showModalEdit()),
  showModalMove: () => dispatch(showModalMove())
});

export default connect(null, mapDipatchToProps)(FlowListItem);
