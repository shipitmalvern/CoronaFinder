// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/App'
import {createStore, applyMiddleware, compose} from 'redux'
import allReducers from '../reducers/index'
import {Provider} from 'react-redux'





const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <IntlProvider locale="en">
      <Provider store ={store}>
          <App/>
      </Provider>
    </IntlProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})
