import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';

import List from '@common/example/list/redux-containers/List';

import '../css/list.scss';

class ListHome extends Component {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
    }
    clickHandle(item) {
        this.props.history.push('/example/list');
    }
    render() {
        return (
            <Router>
                <div>
                    <List />
                    <div className="home-more">
                        <div onClick={this.clickHandle}>想了解更多点这里<span>&gt;&gt;</span></div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default withRouter(ListHome);