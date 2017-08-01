import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: []
    };
  }
  componentDidMount() {
    var newTodoList = ['Wash clothes', 'Eat apples'];
    this.setState({
      todoList: newTodoList
    });
  }
  render() {
    const todoList = this.state.todoList;
    return (
      <div className="App">
        <Header></Header>
        <TodoInput></TodoInput>
        <TodoList todoList={todoList}></TodoList>
      </div>
    );
  }
}

export default App;
