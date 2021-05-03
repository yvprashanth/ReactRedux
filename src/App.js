import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" />
          <h2>Welcome to Prashanth Todo List </h2>
        </header>
        <div className="Todo-App">
          <TodoForm />
          <TodoList todos={this.props.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
