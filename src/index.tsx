import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from './store/configureStore';
import { store as rootReducer } from './store/store';
import { initialState as boardState } from "./modules/BoardModule/reducers";
import { initialState as chatState } from "./modules/ChatModule/reducers";
import { Provider } from 'react-redux';

const state = {
  boardList: boardState,
  chatList: chatState
};

const store = configureStore(rootReducer, state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
