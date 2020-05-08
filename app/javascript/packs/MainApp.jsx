
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/App'
import allReducers from '../reducers/combineReducer'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'


const store = createStore(
  allReducers, 
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Provider store ={store}>
          <App/>
      </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
