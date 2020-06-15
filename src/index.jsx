import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './App'
import * as serviceWorker from './serviceWorker'

const app = (
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'))

serviceWorker.unregister()
