import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './app'
import reducers from './reducers'

// No Thunk
// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// Got Thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // Connect React and Redux
    <Provider store={store}>
      <App/>
    </Provider>,
    // Where should React attach to the DOM
    document.getElementById('app')
  )
})
