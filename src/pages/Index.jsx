import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Switch } from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";
import Dashboard from "../subpages/Dashboard";
import SiteMap from "../subpages/SiteMap";
import Robot from "../subpages/Robot";
import DashboardDetails from "./../subpages/DashboardDetails";
import ChatPanel from "../components/ChatPanel/ChatPanel";
import Modal from "../components/modal/Modal";

const Index = props => {

  return (
    <div className="container">
      <SideMenu />
      <div className="container__content">
        <Header />
        <div className="container__content__body">
          <div className="flex container__content__body--absolute">
            <div className="flex__container">
              <div className="main">
                <Switch>
                  {/* <Route exact path={"/"} component={Dashboard} /> */}
                  <Route
                    exact
                    path={`${props.match.path}/dashboard`}
                    component={Dashboard}
                  />
                  <Route
                    path={`${props.match.path}/dashboard/details`}
                    component={DashboardDetails}
                  />
                  <Route
                    path={`${props.match.path}/sitemap`}
                    component={SiteMap}
                  />
                  <Route path={`${props.match.path}/robot`} component={Robot} />
                  <Route
                    path="*"
                    render={() => <h1>404 - Página nao encontrada</h1>}
                  />
                </Switch>
              </div>
              {/* MODAL COMPONENT */}

              <Modal />
            </div>
          </div>
        </div>
        <ChatPanel />
      </div>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({ userReducer });

export default connect(mapStateToProps)(withRouter(Index));
