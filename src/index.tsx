import * as React from "react";
import * as ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import {configureStore, history} from "./store/reducers/store";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from "./containers/Layout/Layout";

import App from './App';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={App} />
                    {/*<Route path='*' component={Error} />*/}
                </Switch>
            </Layout>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
serviceWorker.unregister();
