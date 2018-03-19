import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './home/index';
import List from './list/index';
import NotFound from './common/404';

class ModalSwitch extends Component {
    constructor(props) {
        super(props);
        this.previousLocation = this.props.location;
    }
    componentWillUpdate(nextProps) {
        const { location } = this.props;
        if (
            nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = nextProps.history.location;
        }
    }
    render() {
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location // not initial render
        );
        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path='/' component={Home} />
                    <Route path='/example/list' component={List} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

const ModalGallery = () => (
    <Router>
        <Route component={ModalSwitch} />
    </Router>
);

export default ModalGallery;
