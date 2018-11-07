import React, { Component } from 'react';
import TodoList from "./TodoList";

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '', id: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditTodos = this.handleEditTodos.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <label className="sr-only">Whats's need to done!!</label>
              <input type="text"
                className="form-control"
                placeholder="Todo Task Name"
                onChange={this.handleChange}
                value={this.state.text} />
            </div>
          </form>
        </div>
        <TodoList items={this.state.items} editTodos={this.handleEditTodos} />
      </div>
    );
  }
  handleEditTodos(item) {
    this.setState({
      text: item.text,
      id: item.id,
      mode: 'edit'
    })
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    if (this.state.mode === 'edit') {
      this.state.items.map((item) => {
        if (item.id == this.state.id) {
          item.text = this.state.text;
          item.mode = 'new'
        }
        this.setState(state => ({
          items: state.items,
          text: '',
          mode: 'new'
        }));
      })
    } else {
      const newItem = {
        text: this.state.text,
        id: Date.now(),
        mode: 'new'
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
}

export default Todos;
