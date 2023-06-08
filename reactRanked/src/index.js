import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'alertifyjs/build/css/alertify.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/reducers/configureStore'
const root = ReactDOM.createRoot(document.getElementById('root'))
const store = configureStore()

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
