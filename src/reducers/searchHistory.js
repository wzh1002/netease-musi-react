import { reducersCreator } from '../utils';
import { FETCH_SEARCH_HISTORY } from '../constants';


const initialState = [];

const reducers = {
    [FETCH_SEARCH_HISTORY](state, action) {
        return [
            ...action.data
        ]
    }
};

export default reducersCreator(initialState, reducers);
