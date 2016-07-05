import { render } from 'react-dom';
import App from './App.js';
import React from 'react';

const data = window.__INITIAL_STATE__;

render(
    <App data={data} />,
    document.getElementById('app')
);