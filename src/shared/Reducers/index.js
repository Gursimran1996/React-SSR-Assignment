import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    dataReducer: dataReducer,
    filtersReducer: filtersReducer
});