import React from "react";
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/index.js';
import initialState from './models/initial-state.js';

import App from "./components/app.jsx";

import "./assets/styles/app.scss";

// Normal createStore
const store = createStore(reducer, initialState);

// Mount the store with devtools
// const store = createStore(reducer, initialState, 
//   window.devToolsExtension ? window.devToolsExtension() : undefined
// );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));