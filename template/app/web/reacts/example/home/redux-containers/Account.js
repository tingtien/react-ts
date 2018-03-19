import React, { Component } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';
import { getAccountAction } from '../redux-actions/index';


class GetAccount extends Component {
    componentDidMount() {
        const { getData } = this.props;
        getData();
    }
    render() {
        const { data } = this.props;
        return (
            <Account account={data} />
        );
    }
}

const mapStateToProps = state => ({
    data: state.home.account
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getAccountAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GetAccount);