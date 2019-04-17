import 'whatwg-fetch';
import 'es6-promise';

import api from '../api';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_ACCOUNT = 'FETCH_SUCCESS_ACCOUNT';
const FETCH_FAIL = 'FETCH_FAIL';


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

export const getAccountAction = () => {
    return getData(api.account, FETCH_SUCCESS_ACCOUNT);
};