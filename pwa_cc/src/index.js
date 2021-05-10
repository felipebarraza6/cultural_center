import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import App from './App'
import * as serviceWorkerRegistration from './services/serviceWorkerRegistration'
import reportWebVitals from './services/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


serviceWorkerRegistration.unregister()
reportWebVitals()
