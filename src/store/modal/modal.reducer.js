import ModalActionTypes from "./modal.types.js";
import ModalFluxo from "./../../components/modal/ModalFluxo";
import ModalConfFluxo from "./../../components/modal/ModalConfFluxo";
import ModalAddFolder from "./../../components/modal/ModalAddFolder";
import ModalEditFolder from "./../../components/modal/ModalEditFolder";
import ModalMoveFolder from "./../../components/modal/ModalMoveFolder";
import ModalDeleteFolder from "./../../components/modal/ModalDeleteFolder";

const INITIAL_STATE = {
  modalTitle: "Titulo Modal",
  modalConfirmActionLabel: "Confirmar",
  modalCancelActionLabel: null,
  meta: {
    modalContentComponent: ModalFluxo,
    modalClass: "modal-fluxo",
    modalTitle: "modal-title",
    modalContent: "modal-content"
  }
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL_ADD_FOLDER:
      return {
        ...state,
        modalTitle: "Criar nova Pasta",
        modalConfirmActionLabel: "Salvar",
        meta: {
          modalContentComponent: ModalAddFolder,
          modalClass: "add-fluxo",
          modalTitle: "add-folder-title",
          modalContent: "add-folder-content"
        }
      };
    case ModalActionTypes.SHOW_MODAL_EDIT_FOLDER:
      return {
        ...state,
        modalTitle: "Editar Pasta",
        modalConfirmActionLabel: "Salvar",
        meta: {
          modalContentComponent: ModalEditFolder,
          modalClass: "add-fluxo",
          modalTitle: "edit-folder-title",
          modalContent: "edit-folder-content"
        }
      };
    case ModalActionTypes.SHOW_MODAL_MOVE_FOLDER:
      return {
        ...state,
        modalTitle: "Mover Pasta",
        modalConfirmActionLabel: "Mover",
        meta: {
          modalContentComponent: ModalMoveFolder,
          modalClass: "move-folder",
          modalTitle: "move-folder-title",
          modalContent: "move-folder-content"
        }
      };
    case ModalActionTypes.SHOW_MODAL_DELETE_FOLDER:
      return {
        ...state,
        modalTitle: "Tem Certeza?",
        modalConfirmActionLabel: "Sim",
        modalCancelActionLabel: "Não",
        meta: {
          modalContentComponent: ModalDeleteFolder,
          modalClass: "modal-delete-folder",
          modalTitle: "delete-folder-title",
          modalContent: "delete-folder-content"
        }
      };
    case ModalActionTypes.SHOW_MODAL_FLUXO:
    case ModalActionTypes.SHOW_MODAL_CONF_FLUXO:
      return {
        ...state,
        modalTitle: "Configurar Fluxo",
        modalConfirmActionLabel: "Salvar",
        meta: {
          modalContentComponent: ModalFluxo,
          modalClass: "modal-fluxo",
          modalTitle: "modal-1-title",
          modalContent: "modal-1-content"
        }
      };

    default:
      return state;
  }
};

export default modalReducer;
