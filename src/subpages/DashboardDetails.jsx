import React, { useEffect } from "react";
import { Link, Route, useLocation, Redirect } from "react-router-dom";
import SubPageHeader from "./../components/misc/SubPageHeader";
import DashboardDetailsClient from "../components/Dashboard/clients/DashboardDetailsClient";
import DashboardDetailsFlow from "../components/Dashboard/flows/DashboardDetailsFlow";

const DashboardDetails = () => {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <React.Fragment>
      <SubPageHeader
        title="Dashboard"
        actionEnabled={true}
        actionBtnLabel="Buscar"
        withButton={false}
      />

      <div className="flex__row">
        <div className="flex__cell flex__cell--12">
          <div className="path">
            <div className="path__item">
              <div className="path__item__text">
                <Link to={"/app/dashboard"}>Dashboard </Link>
              </div>
              <div className="path__item__icon">
                <i className="material-icons">keyboard_arrow_right</i>
              </div>
            </div>

            <a className="path__item">
              <div className="path__item__text">
                {location.pathname.split("/")[4] === "clients"
                  ? "Clientes"
                  : "Fluxos"}
              </div>
              <div className="path__item__icon">
                <i className="material-icons">keyboard_arrow_right</i>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* MAIN BODY */}
      <div className="main__body">
        <div className="btn-group-row">
          <div className="btn-normal-group">
            <Link to="/app/dashboard/details/clients">
              <span
                className={`btn-normal-group__item ${
                  location.pathname.split("/")[4] === "clients" ? "active" : ""
                }`}
              >
                Clientes
              </span>
            </Link>
            <Link to="/app/dashboard/details/flows">
              <span
                className={`btn-normal-group__item ${
                  location.pathname.split("/")[4] !== "clients" ? "active" : ""
                }`}
              >
                Fluxos
              </span>
            </Link>
          </div>
        </div>
        <Route
          path="/"
          render={() => <Redirect to={`/app/dashboard/details/clients`} />}
        />
        <Route
          path={`/app/dashboard/details/clients`}
          component={DashboardDetailsClient}
        />

        <Route
          path={`/app/dashboard/details/flows`}
          component={DashboardDetailsFlow}
        />
      </div>
    </React.Fragment>
  );
};

export default DashboardDetails;
