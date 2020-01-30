import React from "react";
import MascotLogo from "../../assets/images/genium-mascot.png";
import { PopOver } from "../../utils/Typpy";
import { connect } from "react-redux";
import {
  showModalDelete,
  showModalMove,
  showModalEdit
} from "../../store/modal/modal.actions";
import MicroModal from "micromodal";
import { ReactComponent as DelIcon } from "../../assets/images/del-alt.svg";
import { ReactComponent as MoveIcon } from "../../assets/images/move-alt.svg";
import { ReactComponent as EditIcon } from "../../assets/images/edit-alt.svg";
import { ReactComponent as DoubleIcon } from "../../assets/images/double-alt.svg";

MicroModal.init();

const FoldersContentItem = props => {
  const handleActionItemClick = action => {
    switch (action) {
      case "delete":
        props.showModalDelete();
        break;
      case "move":
        props.showModalMove();
        break;
      case "edit":
        props.showModalEdit();
        break;
      default:
        break;
    }
    MicroModal.show("modal-component");
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

  return (
    <div className="folders__content__item">
      <div className="folders__content__item__identify">
        <div className="">
          <img className="img" src={MascotLogo} alt="Genium" />
        </div>
        <div className="folders__content__item__identify__name">Delph</div>
      </div>
      <PopOver
        placement="right"
        trigger="click"
        interactive={true}
        content={renderPopOver()}
      >
        <div
          className="open-tippy tippy-context-menu"
          data-template="drop-options-modais"
          tabIndex="0"
        >
          <i className="material-icons">more_horiz</i>
        </div>
      </PopOver>
    </div>
  );
};

const mapDipatchToProps = dispatch => ({
  showModalDelete: () => dispatch(showModalDelete()),
  showModalEdit: () => dispatch(showModalEdit()),
  showModalMove: () => dispatch(showModalMove())
});

export default connect(null, mapDipatchToProps)(FoldersContentItem);
