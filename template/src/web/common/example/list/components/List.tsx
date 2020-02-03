import React, { Component } from "react";

import styles from "../css/list.m.scss";

/* Declaration Start */
type TProps = {
  list?: {
    title?: string;
    content?: string;
  }[];
  getData: () => void;
};

type TStates = {
  loading: boolean;
};

/* Declaration End */
export default class List extends Component<TProps, TStates> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { list } = this.props;
    const { loading } = this.state;
    if (list) {
      return (
        <div className={styles.list}>
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
        </div>
      );
    } else if (loading) {
      return <div>正在请求...</div>;
    } else {
      return <div>暂无信息</div>;
    }
  }
}
