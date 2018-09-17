import { combineReducers } from 'redux';

import home from './home/redux-reducers';
import list from '@common/example/list/redux-reducers/index';

export default combineReducers({ home, list });