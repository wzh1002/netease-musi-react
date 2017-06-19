import { combineReducers } from 'redux';
import recommend from './recommend';
import nav from './nav';
import hot from './hotMusic';
import search from './search';

export default combineReducers({
    recommend,
    nav,
    hot,
    search
});
