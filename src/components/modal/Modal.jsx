import React from "react";
import { connect } from "react-redux";

const Modal = (props, { toggleModal }) => {
  const {
    meta,
    modalTitle,
    modalCancelAction,
    modalConfirmAction,
    modalConfirmActionLabel,
    modalCancelActionLabel
  } = props.modal;

  return (
    <div
      className="modal micromodal-slide"
      id="modal-component"
      aria-hidden="true"
    >
      <div
        className={`modal__overlay`}
        aria-modal="true"
        aria-labelledby={meta.modalTitle}
        tabIndex="-1"
      >
        {/* NOTE - remover classe "modal-delete-folder" */}
        <div className={`modal__container ${meta.modalClass}`} role="dialog">
          {/* MODAL HEADER */}
          <header className="modal__header">
            <h2 className="modal__title" id={meta.modalTitle}>
              {modalTitle}
            </h2>
            <button
              className="modal__close"
              aria-label="Close modal"
              data-micromodal-close
              onClick={toggleModal}
            ></button>
          </header>
          {/* MAIN CONTENT */}
          <main className="modal__content" id={meta.modalContent}>
            <meta.modalContentComponent />
            {/* {children} */}
          </main>
          {/* MODAL FOOTER */}
          <footer className="modal__footer">
            <button
              className="modal__btn modal__btn-primary yes  modal__btn-confirm"
              onClick={modalConfirmAction}
            >
              {modalConfirmActionLabel}
              {/* Confirmar */}
              {/* {modalConfirmActionName} */}
            </button>
            {modalCancelActionLabel && (
              <button
                className="modal__btn no modal__btn-cancel"
                onClick={modalCancelAction}
                aria-label="Close this dialog window"
              >
                {modalCancelActionLabel}
              </button>
            )}
          </footer>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.modalReducer
});
export default connect(mapStateToProps)(Modal);
