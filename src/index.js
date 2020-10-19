import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './scss/index.scss';
import { HashRouter } from 'react-router-dom';

const Application = (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(Application, document.getElementById('root'));
