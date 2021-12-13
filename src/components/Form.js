import { useState } from 'react';
import './Form.css';

const Form = props => {
  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      title: todo,
      text: description,
      completed: false,
      order: 0,
    };

    props.addTodo(newTodo);
    setTodo('');
    setDescription('');
  };
  return (
  <form className="form" onSubmit={handleSubmit}>
    <input type="text" className="form__title-input" onChange={e => setTodo(e.target.value)} value={todo} maxLength="65" placeholder="ADD THE TITLE" required />
    <input name="todo-description" className="form__description-input" maxLength="170" cols="5" rows="7" placeholder="ADD THE DESCRIPTION" onChange={e => setDescription(e.target.value)} value={description}></input>
    <button type="submit" className="form__button">ADD TODO</button>
  </form>
  );
};

export default Form;
