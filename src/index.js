import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'; 
import {updateCurrentAction} from './reducers/todo';
import {bindActionCreators} from 'redux';

// const todoChangeHandler = (val) => (
//   store.dispatch(updateCurrentAction(val )))

const actions = bindActionCreators({updateCurrentAction}, store.dispatch)

const render = () => {
  const state = store.getState()

  ReactDOM.render(
    <App todos={state.todos} currentTodo={state.currentTodo}
    changeCurrent={actions.updateCurrentAction}/>,
    document.getElementById('root')
  );
}

render()

store.subscribe(render);

setTimeout(() => {
  store.dispatch({type:'TODO_ADD', payload: {id: 5, name:'Pay Bills', 'isComplete': false}});
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
