import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import {Provider} from "react-redux";

import App from '../src/App';

import store from './data/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// </React.StrictMode>, for StrictMode is a tool for highlighting potential problems in an application
// Like Fragment, StrictMode does not render any visible UI.
