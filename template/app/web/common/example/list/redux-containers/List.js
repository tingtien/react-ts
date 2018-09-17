import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import { getListAction } from '../redux-actions';

const mapStateToProps = state => ({
    list: state.list.list
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getListAction(10))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);