/**
 * Include CSS
 * -----------
 * We do this here so that we can hot-reload it later with webpack-dev-server, and for simplicity in development.
 * In production, however, this needs to be included from the HTML file as a separate css file.
 */
import styles from './styles'; // eslint-disable-line no-unused-vars

// JavaScript dependencies
import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import { routes } from './constants';
import { RouteActions } from './actions';
import {
    Navigator,
    HomePage,
    SecondPage
} from './containers';

// Scroll to top automatically when navigating, except when going back.
let history = browserHistory;
history.listen(location => {

    //Keep redux and react router in sync;
    store.dispatch(RouteActions.setAppRoute(location.pathname));

    setTimeout(() => {
        if (location.action === 'POP') {
            return;
        }
        window.scrollTo(0, 0);
    });
});

if (process.env.NODE_ENV === 'development') {
    window.appHistory = history;
}

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={routes.HOME} component={Navigator}>
                <IndexRoute component={HomePage} />
                <Route path={routes.SECOND_PAGE} component={SecondPage} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('react-wrapper'))
