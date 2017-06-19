import { combineReducers } from 'redux';
import recommend from './recommend';
import hot from './hotMusic';
import search from './search';

export default combineReducers({
    recommend,
    hot,
    search
});
