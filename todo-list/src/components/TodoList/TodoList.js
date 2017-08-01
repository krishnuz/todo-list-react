import React, { Component } from 'react';
import './TodoList.css';
import TodoListItem from '../TodoListItem/TodoListItem';

class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todoList.map(item => <TodoListItem item={item}></TodoListItem>)
                }
            </ul>
        );
    }
}

export default TodoList;