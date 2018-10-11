// account


const init = {
    account: {
        number: "",
        total: "",
    }
};
export default function home(state = init, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS_ACCOUNT':
            return Object.assign({}, state, { account: action.data });
        default:
            return state;
    }
};

