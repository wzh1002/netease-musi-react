import { FETCH_SONG_URL, PENDING_SUFFIX, SUCCESS_SUFFIX, FAIL_SUFFIX } from '../constants';
import { reducersCreator } from '../utils';

const initialState = {
    data: [],
    error: false,
    pending: false
};

const fetchPending = FETCH_SONG_URL + PENDING_SUFFIX;
const fetchSuccess = FETCH_SONG_URL + SUCCESS_SUFFIX;
const fetchFail = FETCH_SONG_URL + FAIL_SUFFIX;

const reducers = {
    [fetchPending](state, action) {
        return {
            ...state,
            data: [],
            pending: true
        };
    },

    [fetchSuccess](state, action) {
        return {
            ...state,
            data: action.data,
            pending: false
        };
    },

    [fetchFail](state, action) {
        return {
            ...state,
            data: [],
            pending: false,
            error: action.error
        };
    }
};

export default reducersCreator(initialState, reducers);
