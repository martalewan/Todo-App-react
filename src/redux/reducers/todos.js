import { combineReducers } from 'redux';

const initialState = {
  todos: [],
  displayAllTodos: true,
  editedTitle: '',
  editedText: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos.concat(action.newTodo)],
      };
    case 'TOGGLE_DISPLAY_DONE':
      return {
        ...state,
        displayAllTodos: !state.displayAllTodos,
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.id)],
      };
    case 'TOGGLE_DONE':
      return {
        ...state,
        todos: [...state.todos.map(todo => {
          if (todo.id === action.id) {
            // eslint-disable-next-line no-param-reassign
            todo.completed = !todo.completed;
          } return { ...todo };
        })],
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: [...state.todos.map(todo => {
          if (todo.id === action.id) {
            // eslint-disable-next-line no-param-reassign
            todo.title = action.title;
            // eslint-disable-next-line no-param-reassign
            todo.text = action.description;
          } return todo;
        })],
      };
    default:
      return state;
  }
};

// const editTodoTitle = (state = '', action) => {
//   switch (action.type) {
//     case 'EDIT_TODO_TITLE':
//       return !state;
//     default:
//       return state;
//   }
// };

// const editTodoText = (state = '', action) => {
//   switch (action.type) {
//     case 'EDIT_TODO_TEXT':
//       return !state;
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
