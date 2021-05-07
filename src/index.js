import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'; 
import {Provider} from 'react-redux'

// const todoChangeHandler = (val) => (
// store.dispatch(updateCurrentAction(val )))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// store.subscribe(render);

setTimeout(() => {
  store.dispatch({type:'TODO_ADD', payload: {id: 5, name:'Pay Bills', 'isComplete': false}});
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
