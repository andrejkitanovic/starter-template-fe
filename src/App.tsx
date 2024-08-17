import React from "react";
import { createBrowserHistory } from "history";
import DashboardPage from "pages/dashboard/DashboardPage";
import SignInPage from "pages/sign-in/SignInPage";
import { Redirect, Switch } from "react-router-dom";

import PrivateRoute from "components/routes/PrivateRoute";

import AuthRoute from "./components/routes/AuthRoute";
import Providers from "./Providers";

export const history = createBrowserHistory();

const App = () => {
  return (
    <Providers history={history}>
      <Switch>
        <AuthRoute exact component={SignInPage} path="/sign-in" />

        {/* CONTROLLERS */}
        <PrivateRoute exact component={DashboardPage} path="/dashboard" />

        {/* REDIRECT */}
        <Redirect to="/dashboard" />
      </Switch>
    </Providers>
  );
};

export default App;
