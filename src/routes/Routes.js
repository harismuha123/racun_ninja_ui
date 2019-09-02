import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { dashboard as dashboardRoutes, page as pageRoutes } from "./index";

import DashboardLayout from "../layouts/Dashboard";
import AuthLayout from "../layouts/Auth";

const ChildRoutes = ({ layout: Layout, routes }) => (
  <Layout>
    <Switch>
      {routes.map((category, index) =>
        category.children ? (
          // Route item with children
          category.children.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              component={route.component}
            />
          ))
        ) : (
          // Route item without children
          <Route
            key={index}
            path={category.path}
            exact
            component={category.component}
          />
        )
      )}
    </Switch>
  </Layout>
);

const PrivateRoute = ({ component: Component, title, ...rest }) => (
  <Route {...rest} render={(props) => (

      localStorage.getItem("access_token")
          ? (
                <Component {...props} />
          ) :
          <Redirect
              to={{
                  pathname: "/auth/sign-in",
                  state: { from: props.location }
              }}
          />

  )} />
);

const Routes = () => (
  <Router>
    <Switch>
      {/* Auth routes */}
      <Route
        path="/auth/*"
        exact
        component={() => (
          <ChildRoutes layout={AuthLayout} routes={pageRoutes} />
        )}
      />

      {/* Dashboard routes */}
      <PrivateRoute
        path="/*"
        exact
        component={() => (
          <ChildRoutes layout={DashboardLayout} routes={dashboardRoutes} />
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
