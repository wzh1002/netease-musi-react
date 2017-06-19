import { combineReducers } from 'redux';
import searchHistory from './searchHistory';
import hotSearch from './hotSearch';
import searchResult from './searchResult';
import searchSuggest from './searchSuggest';


export default combineReducers({
    searchHistory,
    hotSearch,
    searchResult,
    searchSuggest
});
