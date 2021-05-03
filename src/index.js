import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const state = {
  todos: [
    {id: 1, name: 'Render Static UI', isComplete: true},
    {id: 2, name: 'Take Yuvi To Wiggle Works', isComplete: false},
    {id: 3, name: 'More Items', isComplete: true}
  ]
};

ReactDOM.render(
  <App todos={state.todos}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
