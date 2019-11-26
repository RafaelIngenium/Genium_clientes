import React from "react";
import SearchBar from "./SearchBar";

const SubPageHeader = ({
  title,
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
              <button className="btn btn--primary">{actionBtnLabel}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPageHeader;