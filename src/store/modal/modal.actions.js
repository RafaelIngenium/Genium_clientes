import ModalActionTypes from "./modal.types.js";

export const showModalAdd = modalOpt => ({
  type: ModalActionTypes.SHOW_MODAL_ADD_FOLDER
  // payload: modalOpt
});

export const showModalEdit = modalOpt => ({
  type: ModalActionTypes.SHOW_MODAL_EDIT_FOLDER
  // payload: modalOpt
});

export const showModalMove = modalOpt => ({
  type: ModalActionTypes.SHOW_MODAL_MOVE_FOLDER
  // payload: modalOpt
});

export const showModalDelete = modalOpt => ({
  type: ModalActionTypes.SHOW_MODAL_DELETE_FOLDER
  // payload: modalOpt
});

export const showModalFluxo = () => ({
  type: ModalActionTypes.SHOW_MODAL_FLUXO
  // payload: modalOpt
});

export const showModalConfFluxo = modalOpt => ({
  type: ModalActionTypes.SHOW_MODAL_CONF_FLUXO,
  payload: modalOpt
});
