import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div className="row">
                <ul className="list-group list-group-flush">
                    {this.props.items.map(item => (
                        <li  className="list-group-item" key={item.id}>{item.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
