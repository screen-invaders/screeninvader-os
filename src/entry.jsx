import React from "react";
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer.js';
import initialState from './models/initial-state.js';

import App from "./components/app.jsx";

import "./assets/styles/app.scss";

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));