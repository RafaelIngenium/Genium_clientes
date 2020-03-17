import React, { lazy, Suspense, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Loading from "./components/Loading";
import "./build/css/main.min.css"

const Login = lazy(() => import("./pages/Login"));
const Index = lazy(() => import("./pages/Index"));

function App({ userReducer, history }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCurrentUser(userReducer.user);
    setError(userReducer.error);
    // history.push("/");
  }, [userReducer]);

  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route
            path="/"
            render={() =>
              currentUser ? (
                <Redirect to="/app/dashboard" />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="/app" render={() => <Index />} />
          <Route path="/login" render={() => <Login />} />
        </Suspense>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ userReducer }) => ({
  userReducer
});

export default connect(mapStateToProps)(withRouter(App));
