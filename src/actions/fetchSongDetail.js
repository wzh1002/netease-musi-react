import { FETCH_SONG_DETAIL, PENDING_SUFFIX, SUCCESS_SUFFIX, FAIL_SUFFIX } from '../constants';
import { actionsCreator } from '../utils';
import { fetchSongDetail } from '../api';

const fetchPending = actionsCreator(FETCH_SONG_DETAIL + PENDING_SUFFIX);
const fetchSuccess = actionsCreator(FETCH_SONG_DETAIL + SUCCESS_SUFFIX, 'data');
const fetchFail = actionsCreator(FETCH_SONG_DETAIL + FAIL_SUFFIX, 'error');

const fetch = params => {
    return async (dispatch, getState) => {
        dispatch(fetchPending());

        let res;
        try {
            res = await fetchSongDetail(params);
        } catch (e) {
            return dispatch(fetchFail('request fail'));
        }
        if (res.status >= 200 && res.status <= 300 || res.status === 304) {
            const data = await res.json();
            dispatch(fetchSuccess(data.songs));
        } else {
            dispatch(fetchFail(res.statusText));
        }
    }
};

export default fetch;
