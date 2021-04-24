import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUB":
      state = state - action.payload;
      break;
    default:
      return state;
  }
  return state;
}

const store = createStore(reducer,100);
store.subscribe(()=>{
  console.log('currect value: ',store.getState());
});

store.dispatch({
  type:"ADD",
  payload:10
});

store.dispatch({
  type:"SUB",
  payload:10
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
