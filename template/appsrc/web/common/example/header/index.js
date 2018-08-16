import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    withRouter
} from 'react-router-dom';

import PropTypes from 'prop-types';

import './index.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.LinkBack = this.LinkBack.bind(this);
    }
    LinkBack(item) {
        this.props.history.goBack();
    }
    render() {
        const { title } = this.props;
        return (
            <Router>
                <div className="fm-header">
                    <div className="back" onClick={this.LinkBack}>
                        <i></i><span>返回</span>
                    </div>
                    <div className="logo">{title}</div>
                </div>
            </Router>
        );
    }
}

// Header.propTypes = {
//     title: Proptypes.str.isRequired,
//     LinkBack: Proptypes.func.isRequired,
// };

export default withRouter(Header);