import React, { useEffect } from "react";
import { useSelector } from "react-redux"
import { Link, Route, useLocation, Redirect } from "react-router-dom";
import SubPageHeader from "./../components/misc/SubPageHeader";
import DashboardDetailsClient from "../components/Dashboard/clients/DashboardDetailsClient";
import DashboardDetailsFlow from "../components/Dashboard/flows/DashboardDetailsFlow";
import ClientComponent from "../components/Dashboard/clients/ClientComponent";
import ChatPanel from "../components/ChatPanel/ChatPanel";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";
import Modal from "../components/modal/Modal";

const DashboardDetails = () => {
  const location = useLocation();

  return (
          <div className="container">
              <SideMenu />
                <div className="container__content">
                    <Header />
                    <div className="container__content__body">
                        <div className="flex container__content__body--absolute">
                          <div className="flex__container">
                            <div className="main">
                                <div className="flex__row">
                                  <SubPageHeader
                                    title={
                                      location.pathname.split("/")[5] === "client"
                                        ? "Detalhes do cliente"
                                        : "Dashboard"
                                    }
                                    actionEnabled={true}
                                    actionBtnLabel="Buscar"
                                    withButton={false}
                                  />
                                </div>
                                <div className="flex__row">
                                  <div className="flex__cell flex__cell--12">
                                    <div className={location.pathname.split("/")[5] === "client" ? "path client-details-path":"path"}>
                                      <span className="path__item">
                                        <div className="path__item__text">
                                          <Link to={"/app/dashboard"}>Dashboard </Link>
                                        </div>
                                        <div className="path__item__icon">
                                          <i className="material-icons">keyboard_arrow_right</i>
                                        </div>
                                      </span>

                                      <span className="path__item">
                                        <div className="path__item__text">
                                          {location.pathname.split("/")[4] === "clients" ? (
                                            <Link to={"/app/dashboard/details/clients"}>LIVECHAT </Link>
                                          ) : (
                                            "Fluxos"
                                          )}
                                        </div>
                                        <div className="path__item__icon">
                                          <i className="material-icons">keyboard_arrow_right</i>
                                        </div>
                                      </span>

                                      {location.pathname.split("/")[5] === "client" && (
                                        <span className="path__item">
                                          <div className="path__item__text">Detalhes do cliente</div>
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                {/* MAIN BODY */}
                                <div className="main__body">
                                  {location.pathname.split("/")[5] === "client" ? (
                                    ""
                                  ) : (
                                    <div className="btn-group-row">
                                      <div className="btn-normal-group">
                                        <Link to="/app/dashboard/details/clients">
                                          <span
                                            className={`btn-normal-group__item ${
                                              location.pathname.split("/")[4] === "clients"
                                                ? "active"
                                                : ""
                                            }`}
                                          >
                                            Clientes
                                          </span>
                                        </Link>
                                        <Link to="/app/dashboard/details/flows">
                                          <span
                                            className={`btn-normal-group__item ${
                                              location.pathname.split("/")[4] !== "clients"
                                                ? "active"
                                                : ""
                                            }`}
                                          >
                                            Fluxos
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                  )}

                                  <Route
                                    path="/"
                                    render={() => <Redirect to={`/app/dashboard/details/clients`} />}
                                  />
                                  <Route
                                    path={`/app/dashboard/details/clients`}
                                    exact
                                    component={DashboardDetailsClient}
                                  />

                                  <Route
                                    path={`/app/dashboard/details/flows`}
                                    exact
                                    component={DashboardDetailsFlow}
                                  />
                                  <Route
                                    path="/app/dashboard/details/clients/client"
                                    exact
                                    component={ClientComponent}
                                  />
                                </div>
                              </div>
                            <Modal />
                        </div>
                      </div>
                  </div>
                  <ChatPanel />
              </div>
        </div>
  );
};

export default DashboardDetails;
