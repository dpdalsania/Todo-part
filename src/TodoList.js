import React, { Component } from "react";
import TodoItem from "./TodoItem";
import {toggleTodo} from "./actions";
import {connect} from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              //handleToggle={event => this.props.toggleTodo(todo.id)}
              handleDelete={event => this.props.handleDelete(todo.id)}
              handleCompleted={event => this.props.handleCompleted(todo.id)}
              handleToggle={event => this.props.toggleTodo(todo.id)}
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </ul>
      </section>
    );
  }
}
const mapDispatchToProps = {
  toggleTodo
};
export default connect(null,mapDispatchToProps) (TodoList);
