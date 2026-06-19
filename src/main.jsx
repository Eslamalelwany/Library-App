import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Store } from './Store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router";

import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './Store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)


