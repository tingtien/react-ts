import React from "react";
import { connect } from "react-redux";
import List from "../components/List";
import { getList } from "../redux-actions";
import * as typsReducer from "../redux-reducers";

const mapStateToProps = (state: typsReducer.state) => ({
  list: state.list.data
});

const mapDispatchToProps = (dispatch: any) => ({
  getData: () => dispatch(getList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List as React.ComponentType);
