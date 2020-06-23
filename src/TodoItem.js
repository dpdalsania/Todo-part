import React, { Component } from "react";
// import { connect } from "react-redux";
// import { toggleTodo } from "./actions";

 export class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={this.props.handleToggle}
          />
          <label>{this.props.title}</label>
          <button
            className="destroy"
            onClick={event => this.props.handleDelete}
          />
        </div>
      </li>
    );
  }
}
// const mapDispatchToProps = {
//   toggleTodo
// };

// export default connect(null, mapDispatchToProps)(TodoItem);
export default TodoItem;
