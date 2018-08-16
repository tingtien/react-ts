import React, { Component } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';
import { getAccountAction } from '../redux-actions';

const mapStateToProps = state => ({
    account: state.home.account
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getAccountAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);