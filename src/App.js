import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import { Route, NavLink } from "react-router-dom";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import {addTodo, clearCompletedTodos} from "./actions";

class App extends Component {
  state = {
    todos: todosList,
    value: ""
  };
  handleDelete = todoIdToDelete => {
    const newTodoList = this.state.todos.filter(
      todo => todo.id !== todoIdToDelete
    );
    this.setState({ todos: newTodoList });
  };

  handleCreate = event => {
    if (event.key === "Enter") {
      this.props.addTodo(this.state.value);
      this.setState({value:""});
    }
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleCompleted = todoIdToCompleted => {
    const newTodoList = this.state.todos.filter(
      todo => todo.completed !== true
    );
    this.setState({ todos: newTodoList });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            // autofocus
            onKeyDown={this.handleCreate}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </header>
        <Route
          exact
          path="/"
          render={() => (
            <TodoList
              //  handleToggle={this.handleToggle}
              handleDelete={this.handleDelete}
              todos={this.props.todos}
            />
          )}
        />

        <Route
          exact
          path="/active"
          render={() => (
            <TodoList
              // handleToggle={this.handleToggle}
              handleDelete={this.handleDelete}
              todos={this.props.todos.filter(todo => todo.completed === false)}
            />
          )}
        />

        <Route
          exact
          path="/completed"
          render={() => (
            <TodoList
            //  handleToggle={this.handleToggle}
              handleDelete={this.handleDelete}
              todos={this.props.todos.filter(todo => todo.completed === true)}
            />
          )}
        />

        <footer className="footer">
          <span className="todo-count">
            <strong>
              {this.props.todos.filter(todo => todo.completed !== true).length}
            </strong>{" "}
            item(s) left
          </span>
          <ul className="filters">
            <li>
              <NavLink exact to="/" activeClassName="selected">
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/active" activeClassName="selected">
                Active
              </NavLink>
            </li>
            <li>
              <NavLink to="/completed" activeClassName="selected">
                Completed
              </NavLink>
            </li>
          </ul>
          <button
            className="clear-completed"
            onClick={this.props.clearCompletedTodos}
          >
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
const mapDisptachToProps = {
  addTodo,
  clearCompletedTodos
};

export default connect(mapStateToProps,mapDisptachToProps)(App);
