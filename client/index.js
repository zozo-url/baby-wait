import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    // Where should React attach to the DOM
    document.getElementById('app')
  )
})
