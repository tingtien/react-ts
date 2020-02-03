import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import styles from "./css/header.m.scss";

/* Declaration Start */

type TProps = {
  title?: string;
} & RouteComponentProps;

/* Declaration End */

class Header extends Component<TProps> {
  LinkBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { title } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.back} onClick={this.LinkBack}>
          <i></i>
          <span>返回</span>
        </div>
        <div className={styles.logo}>{title}</div>
      </div>
    );
  }
}

export default withRouter(Header);
