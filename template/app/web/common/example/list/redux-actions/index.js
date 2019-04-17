import 'whatwg-fetch';
import 'es6-promise';

import api from '../api';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_LIST = 'FETCH_SUCCESS_LIST';

const getData = (url, type) => {
    return (dispatch) => {
        // dispatch({ type: FETCH_LOADING });
        return fetch(url)
            .then(rs => {
                return rs.json();
            }).then(rs => {
                dispatch({ type: type, data: rs });
            }).catch((rs) => {
                dispatch({ type: FETCH_FAIL });
            });
    };
};

export const getListAction = (pageSize) => {
    pageSize || (pageSize = 5);
    return getData(api.list, FETCH_SUCCESS_LIST, pageSize);
};