import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import axios from "axios";

import styles from "../css/account.m.scss";

import api from "../api";
/* Declaration Start */
type TProps = RouteComponentProps;

type States = {
  account: {
    number?: string;
    total?: string;
  };
};
/* Declaration End */

class Account extends Component<TProps, States> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      account: {
        number: null,
        total: null
      }
    };
  }

  componentDidMount() {
    axios
      .get(api.account.url)
      .then(rs => {
        if (rs && rs.data) {
          this.setState({
            account: rs.data
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  clickHandle = () => {
    this.props.history.push("/example/list");
  };

  render() {
    const { account } = this.state;
    return (
      <ul className={styles.account}>
        <li>在存{account.number} 笔，本金共计</li>
        <li> {account.total} </li>
        <li>
          <p className={styles.inline} onClick={this.clickHandle}>
            查看详细
            <span>&gt;</span>
          </p>
        </li>
      </ul>
    );
  }
}

export default withRouter(Account);
