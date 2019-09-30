import axios from "axios";

import api from "../api";

const FETCH_SUCCESS_LIST = "FETCH_SUCCESS_LIST";

const getData = (url, type) => {
  return dispatch => {
    return axios
      .get(url)
      .then(rs => {
        dispatch({ type: type, data: rs.data });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const getListAction = pageSize => {
  pageSize || (pageSize = 5);
  return getData(api.list, FETCH_SUCCESS_LIST, pageSize);
};
