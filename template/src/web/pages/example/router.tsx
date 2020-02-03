import React, { Component } from "react";

import { Switch, Route, RouteComponentProps } from "react-router-dom";

import NotFound from "@common/example/404";

export default class ModalSwitch extends Component<RouteComponentProps> {
  private previousLocation: any;

  constructor(props: RouteComponentProps) {
    super(props);
    this.previousLocation = this.props.location;
  }

  componentDidUpdate(nextProps: RouteComponentProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = nextProps.history.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
    return (
      <Switch location={isModal ? this.previousLocation : location}>
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
