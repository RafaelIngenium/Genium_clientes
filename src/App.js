import React, { lazy, Suspense, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Loading from "./components/Loading";
// import Login from "./pages/Login";
// import Index from "./pages/Index";

const Login = lazy(() => import("./pages/Login"));
const Index = lazy(() => import("./pages/Index"));

function App({ user, history }) {
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    setCurrentUser(user);
    // history.push("/");
  }, [user]);

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
          {/* <Route path="*" render={() => <Login />} /> */}
        </Suspense>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer.user
});

export default connect(mapStateToProps)(withRouter(App));
