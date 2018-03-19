import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

let GetHeader = ({ previousPage }) => {
    return (
        <Header previousPage={previousPage} />
    );
};

const mapStateToProps = state => ({
    value: state
});

GetHeader = connect(
    mapStateToProps
)(GetHeader);

export default GetHeader;