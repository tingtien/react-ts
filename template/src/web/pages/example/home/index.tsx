import React, { Fragment } from "react";
import Header from "./components/Header";
import Account from "./components/Account";
import Icon from "./components/Icon";
import List from "@common/example/list/redux-containers/List";
import Button from "./components/Button";

import styles from "./css/index.m.scss";

const Home = () => (
  <Fragment>
    <div className={styles.content}>
      <Header />
      <Account />
      <Icon />
      <List />
    </div>
    <Button />
  </Fragment>
);

export default Home;
