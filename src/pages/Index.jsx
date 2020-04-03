import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Switch } from "react-router-dom";
import Dashboard from "../subpages/Dashboard";
import SiteMap from "../subpages/SiteMap";
import Robot from "../subpages/Robot";
import DashboardDetails from "./../subpages/DashboardDetails";
import Constructor from "../subpages/Constructor"

const Index = props => {
  if(props.match.path === "/app")
      return (
              <Switch>
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
                <Route
                  exact
                  path={`${props.match.path}/constructor`}
                  component={Constructor}
                />
                <Route 
                  path={`${props.match.path}/robot`} 
                  component={Robot} 
                />
                <Route
                  path="*"
                  render={() => <h1>404 - Página nao encontrada</h1>}
                />
              </Switch>
      );
};

const mapStateToProps = ({ userReducer }) => ({ userReducer });

export default connect(mapStateToProps)(withRouter(Index));
