import { UPDATE_SONG_STATUS } from '../constants';
import { reducersCreator } from '../utils';

const initialState = {
    playing: false,
    index: 0
};

const reducers = {
    [UPDATE_SONG_STATUS](state, action) {
        const data = action.data;
        return {
            ...state,
            ...data
        }
    }
};

export default reducersCreator(initialState, reducers);