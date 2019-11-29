import React from "react";
import MicroModal from "micromodal";
import SearchBar from "./SearchBar";

MicroModal.init();

const SubPageHeader = ({
  title,
  onActionBtn,
  actionEnabled,
  actionBtnLabel,
  extraClasses
}) => {
  return (
    <div className="main__header flex__row">
      <div className="flex__cell flex__cell--9">
        <div className="main__header__title">
          <div className="headline headline--primary">{title}</div>
        </div>
      </div>
      {actionEnabled && (
        <div className="flex__cell flex__cell--3">
          <div className="main__header__btn">
            <div className="main__header__btn__item">
              <SearchBar extraClasses={extraClasses} />
            </div>
            <div className="main__header__btn__item">
              <button
                className="btn btn--primary"
                // data-custom-open="modal-component"
                // data-micromodal-trigger="modal-component"
                //onClick={() => MicroModal.show("modal-component")}
                onClick={onActionBtn}
              >
                {actionBtnLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPageHeader;
