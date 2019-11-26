import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";
import Dashboard from "../subpages/Dashboard";
import SiteMap from "../subpages/SiteMap";
import Robot from "../subpages/Robot";
import ChatPanel from "../components/ChatPanel/ChatPanel";

const Index = () => {
  return (
    <div className="container">
      <SideMenu />
      <div className="container__content">
        <Header />
        <div className="container__content__body">
          <div className="flex container__content__body--absolute">
            <div className="flex__container">
              <Route
                pat="/app"
                render={() => <Redirect to="/app/dashboard" />}
              />
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/sitemap" component={SiteMap} />
              <Route path="/app/robot" component={Robot} />
            </div>
          </div>
        </div>
        <ChatPanel />
      </div>
    </div>
  );
};

export default withRouter(Index);
