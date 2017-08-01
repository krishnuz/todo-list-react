import React, { Component } from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {
    render() {
        return (
            <li>
                {this.props.item}
            </li>
        );
    }
}

export default TodoListItem;