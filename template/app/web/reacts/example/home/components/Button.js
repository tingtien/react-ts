import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    browserHistory,
    withRouter
} from 'react-router-dom';

import '../css/button.scss';

class Button extends Component {
    constructor(props) {
        super(props);
        this.LinkDraw = this.LinkDraw.bind(this);
        this.LinkDeposit = this.LinkDeposit.bind(this);
    }
    LinkDraw(item) {
        this.props.history.push('/example/draw');
    }
    LinkDeposit(item) {
        this.props.history.push('/example/save');
    }
    render() {
        return (
            <ul className="fm-home-button">
                <li onClick={this.LinkDraw}>支取</li>
                <li onClick={this.LinkDeposit}>存入</li>
            </ul>
        );
    }
}

export default withRouter(Button);