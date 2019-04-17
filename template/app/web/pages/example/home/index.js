import React from 'react';
import Header from './components/Header';
import Account from './components/Account';
import Icon from './components/Icon';
import List from '@common/example/list/redux-containers/List';
import Button from './components/Button';

const Home = () => (
    <div>
    <div className="fm-home-wrap">
            <Header />
            <Account />
            <Icon />
            <List />
        </div>
        <Button />
    </div>
);

export default Home;