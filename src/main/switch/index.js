import React from "react";
import { Switch, Route } from "react-router-dom";

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
