import React, { Component } from "react";

import { Switch, Route, RouteComponentProps } from "react-router-dom";

import NotFound from "@common/example/404";

export default class ModalSwitch extends Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props);
  }

  render() {
    const { location } = this.props;
    return (
      <Switch location={location}>
        {routes &&
          routes.map((item, index) => {
            return (
              <Route
                exact
                path={item.path}
                component={item.component}
                key={index}
              />
            );
          })}
        <Route component={NotFound} />
      </Switch>
    );
  }
}
