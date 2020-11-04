import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function index({ routes }) {
  return (
    <div>
      <Switch>
        {routes.map((items) => (
          <Route
            exact
            path={items.path}
            key={items.id}
            component={items.render}
          />
        ))}
      </Switch>
    </div>
  );
}
