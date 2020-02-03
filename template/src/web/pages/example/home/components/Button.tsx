import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import styles from "../css/button.m.scss";

/* Declaration Start */
type TProps = RouteComponentProps;
/* Declaration End */

class Button extends Component<TProps> {
  LinkDraw = () => {
    this.props.history.push("/example/draw");
  };

  LinkDeposit = () => {
    this.props.history.push("/example/save");
  };

  render() {
    return (
      <ul className={styles.button}>
        <li onClick={this.LinkDraw}>支取</li>
        <li onClick={this.LinkDeposit}>存入</li>
      </ul>
    );
  }
}

export default withRouter(Button);
