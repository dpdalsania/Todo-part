import todosList from "./todos.json";

import {
  TOGGLE_TODO, 
    CLEAR_COMPLETED_TODOS,
    ADD_TODO
   
} from "./actions";


const intialState = {
  todos: todosList
 
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO:{
      // this.props.toggleTodo(todoIdToToggle);
      const newTodoList = state.todos.map(todo => {
        if (todo.id === action.payload) {
          const newTodo = { ...todo };
          newTodo.completed = !newTodo.completed;
          return newTodo;
        }
        return todo;
      });
    
      return { ...state,todos: newTodoList };
    }
      case ADD_TODO:{
          return {...state,todos: [...state.todos,action.payload]};
      }
      case CLEAR_COMPLETED_TODOS:{
          return {...state,todos: state.todos.filter(todo => todo.completed === false)}
      }
    default:
      return state;
  }
};
export default reducer;
