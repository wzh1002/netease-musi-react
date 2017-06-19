import { FETCH_SEARCH_SUGGEST, PENDING_SUFFIX, SUCCESS_SUFFIX, FAIL_SUFFIX } from '../constants';
import { actionsCreator } from '../utils';
import { fetchSearchSuggest } from '../api';

const fetchPending = actionsCreator(FETCH_SEARCH_SUGGEST + PENDING_SUFFIX);
const fetchSuccess = actionsCreator(FETCH_SEARCH_SUGGEST + SUCCESS_SUFFIX, 'data');
const fetchFail = actionsCreator(FETCH_SEARCH_SUGGEST + FAIL_SUFFIX, 'error');

const fetch = () => {
    return async (dispatch, getState) => {
        dispatch(fetchPending());

        let res;
        try {
            res = await fetchSearchSuggest();
        } catch (e) {
            return dispatch(fetchFail('request fail'));
        }
        if (res.status >= 200 && res.status <= 300 || res.status === 304) {
            const data = await res.json();
            dispatch(fetchSuccess(data.result));
        } else {
            dispatch(fetchFail(res.statusText));
        }
    }
};

export default fetch;
