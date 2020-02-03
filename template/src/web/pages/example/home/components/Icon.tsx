import React from "react";

import styles from "../css/icon.m.scss";

const Icon = () => (
  <div className={styles.icon}>
    <ul>
      <li>
        <i></i>
        <p>零风险</p>
      </li>
      <li>
        <i></i>
        <p>稳健收益</p>
      </li>
      <li>
        <i></i>
        <p>随时取</p>
      </li>
    </ul>
    <div className={styles.line}></div>
  </div>
);

export default Icon;
