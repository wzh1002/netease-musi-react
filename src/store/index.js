import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

const reduxThunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};

const store = createStore(
    reducer,
    applyMiddleware(
        reduxThunk
    )
);

export default store;
