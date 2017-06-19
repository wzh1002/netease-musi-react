import { FETCH_SEARCH_HISTORY } from '../constants';
import { fetchSearchHistory } from '../api';

const fetch = () => {
    return {
        type: FETCH_SEARCH_HISTORY,
        data: fetchSearchHistory()
    }
};

export default fetch;
