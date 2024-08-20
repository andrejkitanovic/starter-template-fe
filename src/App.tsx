import React from "react";
import { createBrowserHistory } from "history";
import DashboardPage from "pages/dashboard/DashboardPage";
import FormPage from "pages/form/FormPage";
import SignInPage from "pages/sign-in/SignInPage";
import TablePage from "pages/table/TablePage";
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
        <PrivateRoute exact component={TablePage} path="/table" />
        <PrivateRoute exact component={FormPage} path="/form" />

        {/* REDIRECT */}
        <Redirect to="/dashboard" />
      </Switch>
    </Providers>
  );
};

export default App;
