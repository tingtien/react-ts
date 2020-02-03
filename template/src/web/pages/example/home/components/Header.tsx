import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import styles from "../css/header.m.scss";

/* Declaration Start */
type Props = {
  title?: string;
};
// type extend
type TProps = Props & RouteComponentProps;

/* Declaration End */

class Header extends Component<TProps> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      title: null
    };
  }

  render() {
    const { title } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.back}>
          <i></i>
          <span>返回</span>
        </div>
        <div className={styles.logo}>{title}</div>
        <div className={styles.reminder}></div>
      </div>
    );
  }
}

export default withRouter(Header);
