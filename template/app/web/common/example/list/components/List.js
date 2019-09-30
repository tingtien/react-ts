import React, { Component } from "react";

import "../css/index.scss";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.status = true;
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        {do {
          if (list) {
            <div className="fm-list">
              {list.map((item, index) => {
                return (
                  <dl key={index}>
                    <dt>
                      <i>Q</i>
                      {item.title}
                    </dt>
                    <dd>
                      <i>A</i>
                      <div>{item.content}</div>
                    </dd>
                  </dl>
                );
              })}
            </div>;
          } else if (this.status) {
            <div>正在请求...</div>;
          } else {
            <div>暂无信息</div>;
          }
        }}
      </div>
    );
  }
}
