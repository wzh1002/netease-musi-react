import  './style/index.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import store from './store';
import { Home, Song, Playlist } from './page';

const app = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/song" component={Song}></Route>
                <Route path="/playlist" component={Playlist}></Route>
            </div>
        </Router>
    </Provider>
);

if (typeof window !== 'undefined') {
    window.store = store;
}

render(
    app,
    document.getElementById('app')
);
