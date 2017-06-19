import { RECOMMEND, HOT, UPDATE_NAV } from '../constants';
import { reducersCreator } from '../utils';

const initialState = RECOMMEND;

const reducers = {
    [UPDATE_NAV](state, action) {
        return action.active;
    }
};

export default reducersCreator(initialState, reducers);
