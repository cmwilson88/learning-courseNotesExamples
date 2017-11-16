import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch   } from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './rootReducer';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
  )
);

render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Greetings} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </App>
    </Router>
  </Provider>
, document.getElementById('app'));