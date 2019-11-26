import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loading from "./components/Loading";
// import Login from "./pages/Login";
// import Index from "./pages/Index";

const Login = lazy(() => import("./pages/Login"));
const Index = lazy(() => import("./pages/Index"));

function App() {
  const currentUser = true;
  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route
            path="/"
            exact
            render={() =>
              currentUser ? (
                <Redirect to="/app/dashboard" />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="/app" render={() => <Index />} />
          <Route path="/login" component={Login} />
          {/* <Route path="*" render={() => <h1>Not found</h1>} /> */}
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
