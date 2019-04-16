import React, { Component } from 'react';
import {
    withRouter
} from 'react-router-dom';

import PropTypes from 'prop-types';

import '../css/header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div className="fm-home-header">
                    <div className="back">
                        <i></i><span>返回</span>
                    </div>
                    <div className="logo">富鑫宝</div>
                    <div className="reminder"></div>
                </div>
            </Router>
        );
    }
}

export default withRouter(Header);