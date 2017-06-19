import { FETCH_SEARCH_HISTORY } from '../constants';
import { reducersCreator } from '../../../utils';


const initialState = [];

const reducers = {
    [FETCH_SEARCH_HISTORY](state, action) {
        return [
            ...action.data
        ]
    }
};

export default reducersCreator(initialState, reducers);
