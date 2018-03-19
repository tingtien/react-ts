import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    browserHistory,
    withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';

import '../css/account.scss';

class List extends Component {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
    }
    clickHandle(item) {
        this.props.history.push('/example/list');
    }
    render() {
        const { account } = this.props;
        return (
            <Router>
                <ul className="fm-account">
                    <li>在存 {account.number} 笔，本金共计</li>
                    <li> {account.total} </li>
                    <li>
                        <p className="inline" onClick={this.clickHandle}>查看详细<span>&gt;</span></p>
                    </li>
                </ul>
            </Router>
        );
    }
}

export default withRouter(List);