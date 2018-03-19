import 'whatwg-fetch';
import 'es6-promise';

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
    return getData('https://easy-mock.com/mock/5a6fc638b2410e30c3732e46/test/account', FETCH_SUCCESS_ACCOUNT);
};