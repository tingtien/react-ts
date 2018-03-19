import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import { getListAction } from '../redux-actions/index';

class GetList extends Component {
    componentDidMount() {
        const { getData } = this.props;
        getData();
    }
    render() {
        const { data } = this.props;
        if (data) {
            return (
                <List list={data} />
            );
        } else {
            return (
                <div>暂无信息</div>
            );
        }
    }
}

const mapStateToProps = state => ({
    data: state.list.list
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getListAction(10))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GetList);