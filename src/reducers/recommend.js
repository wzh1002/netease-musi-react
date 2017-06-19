import { combineReducers } from 'redux';
import personalized from './personalized';
import latestMusic from './latestMusic';


export default combineReducers({
    personalized,
    latestMusic
});
