import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import {empty_fun} from './computer_items/Computer_vision'
import store from './redux/state'

let renderPage = (state) => {
    ReactDOM.render(
    <BrowserRouter>
      <App data = {store} />,
    </BrowserRouter>,
    
    document.getElementById('root')
  );
  }
renderPage(store.empty)
store.empty(renderPage);
empty_fun(renderPage);

