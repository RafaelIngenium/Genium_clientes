import React from "react";
import MicroModal from "micromodal";
import SearchBar from "./SearchBar";
import { useLocation, useHistory, Link } from "react-router-dom";

MicroModal.init();

const SubPageHeader = ({
  title,
  onActionBtn,
  actionEnabled,
  actionBtnLabel,
  extraClasses,
  withButton
}) => {
  const location = useLocation();
  const history = useHistory();

  console.log("EXTRA CLASSES", extraClasses)

  return (
    <React.Fragment>
    {/* // <div className="main__header flex__row"> */}
      <div className="flex__cell flex__cell--9">
        <div className="main__header__title">
          {location.pathname.split("/")[5] === "client" && (
            <Link to="/app/dashboard/details/clients">
              <span className="main__header__title__back">
                <i className="material-icons">arrow_back_ios</i>
              </span>
            </Link>
          )}

          <div className="headline headline--primary">{title}</div>
        </div>
      </div>
      {actionEnabled && (
        <div className="flex__cell flex__cell--3">
          <div className="main__header__btn">
            <div className="main__header__btn__item">
              <SearchBar extraClasses={extraClasses} />
            </div>
            {withButton && (
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
            )}
          </div>
        </div>
      )}
    {/* // </div> */}
    </React.Fragment>
  );
};

export default SubPageHeader;
