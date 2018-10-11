import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => ({
    previousPage: state
});

export default connect(
    mapStateToProps
)(Header);