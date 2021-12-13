import { useSelector, useDispatch } from 'react-redux';
import TodoCards from './TodoCards';
import FilterTodos from './FilterTodos';
import Form from './Form';
import {
  toggleDisplayDoneAction, editTodoAction,
  deleteTodoAction, toggleDoneAction,
  addTodosAction,
} from '../redux/actions/actions';

import './Main.css';
import './Buttons.css';

const Main = () => {
  const dispatch = useDispatch();
  const displayDone = useSelector(state => state.todoReducer.displayAllTodos);
  const todos = useSelector(state => state.todoReducer.todos);

  const addTodo = newTodo => {
    dispatch(addTodosAction(newTodo));
  };

  const setDisplayDone = () => {
    dispatch(toggleDisplayDoneAction());
  };

  const toggleDone = id => {
    dispatch(toggleDoneAction(id));
  };

  const editTodo = (id, editedTitle, editedText) => {
    dispatch(editTodoAction(id, editedTitle, editedText));
  };

  const deleteTodo = id => {
    dispatch(deleteTodoAction(id));
  };

  return (
    <>
      <div className="main-wrapper">
        <h1 className="main-wrapper__title">WHAT WOULD YOU LIKE TO ADD TO YOUR TODO LIST CHAMP?</h1>
        <Form addTodo={addTodo} />
        <FilterTodos displayDone={displayDone} setDisplayDone={setDisplayDone} />
        <section className="todo-wrapper__cards">
          <TodoCards displayDone={displayDone} todos={todos} toggleDone={toggleDone}
            deleteTodo={deleteTodo} editTodo={editTodo} />
        </section>
      </div>
    </>
  );
};

export default Main;
