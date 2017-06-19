import { FETCH_SONG_LYRICS, PENDING_SUFFIX, SUCCESS_SUFFIX, FAIL_SUFFIX } from '../constants';
import { actionsCreator } from '../utils';
import { fetchSongLyrics } from '../api';

const fetchPending = actionsCreator(FETCH_SONG_LYRICS + PENDING_SUFFIX);
const fetchSuccess = actionsCreator(FETCH_SONG_LYRICS + SUCCESS_SUFFIX, 'data');
const fetchFail = actionsCreator(FETCH_SONG_LYRICS + FAIL_SUFFIX, 'error');

const fetch = params => {
    return async (dispatch, getState) => {
        dispatch(fetchPending());

        let res;
        try {
            res = await fetchSongLyrics(params);
        } catch (e) {
            return dispatch(fetchFail('request fail'));
        }
        if (res.status >= 200 && res.status <= 300 || res.status === 304) {
            const data = await res.json();
            dispatch(fetchSuccess(data.lrc));
        } else {
            dispatch(fetchFail(res.statusText));
        }
    }
};

export default fetch;
