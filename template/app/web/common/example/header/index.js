import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./index.scss";

class Header extends Component {
  LinkBack = item => {
    this.props.history.goBack();
  };

  render() {
    const { title } = this.props;
    return (
      <div className="fm-header">
        <div className="back" onClick={this.LinkBack}>
          <i></i>
          <span>返回</span>
        </div>
        <div className="logo">{title}</div>
      </div>
    );
  }
}

export default withRouter(Header);
