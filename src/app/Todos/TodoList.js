import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TodoList extends Component {
    render() {
        return (
            <div className="row">
                <ul className="list-group list-group-flush">
                    {this.props.items.map(item => (
                        <li className="list-group-item" key={item.id}>{item.text}
                            <i className="fas fa-edit" onClick={this.handleEditTodos.bind(this, item)}></i>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    handleEditTodos(item) {
        this.props.editTodos(item)
    }
}

export default TodoList;
