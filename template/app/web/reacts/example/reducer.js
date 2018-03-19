import { combineReducers } from 'redux';

import home from './home/redux-reducers/index';
import list from './common/list/redux-reducers/index';

export default combineReducers({ home, list });