import { createStore, applyMiddleware, combineReducers } from 'redux';
import homeReducer from '../page/Home/reducers';
import songReducer from '../page/Song/reducers'

const reduxThunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};

const reducer = combineReducers({
    Home: homeReducer,
    Song: songReducer
});

const store = createStore(
    reducer,
    applyMiddleware(
        reduxThunk
    )
);

export default store;
