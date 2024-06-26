import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

import { Provider } from 'react-redux'
import './index.css'

import { BrowserRouter } from "react-router-dom";
import {HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);