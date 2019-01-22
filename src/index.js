// import 'core-js/es6/map'
// import 'core-js/es6/set'
// import './polyfills/assign'

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { IntlProvider, addLocaleData } from 'react-intl'
import ModalProvider from './components/Modal/ModalProvider'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard/index'
import Join from './components/Join/index'
import Login from './components/Auth/Login'
import Player from './components/Player'

import locale_en from 'react-intl/locale-data/en'
import locale_uk from 'react-intl/locale-data/uk'
import messages_uk from "./translations/uk.json";
import messages_en from "./translations/en.json";

const messages = {
  'uk': messages_uk,
  'en': messages_en
};

addLocaleData([...locale_en, ...locale_uk])

const language = navigator.language.split(/[-_]/)[0]

const loggedIn = localStorage.authtoken ? true : false

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <ModalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            loggedIn 
              ? <Redirect to="/dashboard" />
              : <Redirect to="/login" />
          )} />
          <Route path="/login" render={() => (
            loggedIn 
              ? <Redirect to="/dashboard" />
              : <Login />
          )} />
          <PrivateRoute path="/dashboard/:id" component={Player} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/join" component={Join} />
        </Switch>
      </BrowserRouter>
    </ModalProvider>
  </IntlProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
