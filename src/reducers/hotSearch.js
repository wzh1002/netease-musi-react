import { FETCH_HOT_SEARCH, PENDING_SUFFIX, SUCCESS_SUFFIX, FAIL_SUFFIX } from '../constants';
import { reducersCreator } from '../utils';

const initialState = {
    data: [],
    error: false,
    pending: false
};

const fetchPending = FETCH_HOT_SEARCH + PENDING_SUFFIX;
const fetchSuccess = FETCH_HOT_SEARCH + SUCCESS_SUFFIX;
const fetchFail = FETCH_HOT_SEARCH + FAIL_SUFFIX;

const reducers = {
    [fetchPending](state, action) {
        return {
            ...state,
            data: { tracks: [] },
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
            data: { tracks: [] },
            pending: false,
            error: action.error
        };
    }
};

export default reducersCreator(initialState, reducers);
