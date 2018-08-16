
const init = {
    list: []
};

export default function List(state = init, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS_LIST':
            return Object.assign({}, state, { list: action.data });
        default:
            return state;
    }
};