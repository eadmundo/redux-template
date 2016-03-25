import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App.react'

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

const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware
  )
)

store.dispatch(testAction());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)