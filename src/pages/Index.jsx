import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";
import Dashboard from "../subpages/Dashboard";
import SiteMap from "../subpages/SiteMap";
import Robot from "../subpages/Robot";
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
              <Switch>
                {/* <Route
                  path={props.match.path}
                  render={() => (
                    <Redirect to={`${props.match.path}/dashboard`} />
                  )}
                /> */}
                <Route
                  path={`${props.match.path}/dashboard`}
                  component={Dashboard}
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

export default withRouter(Index);
