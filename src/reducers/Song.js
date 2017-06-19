import detail from './songDetail';
import lyrics from './songLyrics';
import url from './songUrl';
import status from './songStatus'
import { combineReducers } from 'redux';


export default combineReducers(
    {
        detail,
        lyrics,
        url,
        status
    }
);

