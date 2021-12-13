export const addTodosAction = newTodo => (
  {
    type: 'ADD_TODO',
    // eslint-disable-next-line
    newTodo: newTodo,
  }
);

export const toggleDoneAction = id => (
  {
    type: 'TOGGLE_DONE',
    id,
  }
);

export const deleteTodoAction = id => (
  {
    type: 'DELETE_TODO',
    id,
  }
);

export const toggleDisplayDoneAction = () => ({ type: 'TOGGLE_DISPLAY_DONE' });
export const editTodoAction = (id, title, description) => (
  {
    type: 'EDIT_TODO',
    title,
    description,
    id,
  }
);
