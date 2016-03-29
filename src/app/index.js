import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import {Router, hashHistory} from 'react-router';
import {LOCATION_CHANGE, syncHistoryWithStore, routerMiddleware, routerReducer} from 'react-router-redux';
import routes from './routes'

const rootReducer = (state={}, action) => {
  return state
}

const testAction = () => {
  return {
    type: 'TEST_ACTION',
    payload: {
      foo: 'bar'
    }
  }
}

const loggerMiddleware = createLogger()
const routingMiddleware = routerMiddleware(hashHistory)

const store = createStore(
  combineReducers({
    rootReducer,
    routing: routerReducer
  }),
  applyMiddleware(
    routingMiddleware,
    loggerMiddleware
  )
)

const history = syncHistoryWithStore(hashHistory, store)

store.dispatch(testAction())

render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
)