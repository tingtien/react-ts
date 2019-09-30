import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "../css/account.scss";

import api from "../api";

class Account extends Component {
  constructor(props) {
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

  clickHandle = item => {
    this.props.history.push("/example/list");
  };

  render() {
    const { account } = this.state;
    return (
      <ul className="fm-account">
        <li>在存 {account.number} 笔，本金共计</li>
        <li> {account.total} </li>
        <li>
          <p className="inline" onClick={this.clickHandle}>
            查看详细<span>&gt;</span>
          </p>
        </li>
      </ul>
    );
  }
}

export default withRouter(Account);
