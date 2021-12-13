import React, { useState } from 'react';
import './TodoCards.css';
import ButtonCard from './ButtonCard';

const TodoCards = props => {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingText, setEditingText] = useState('');

  const editTodo = id => {
    props.editTodo(id, editingTitle, editingText);
    setEditingTitle('');
    setEditingText('');
    setTodoEditing(null);
  };

  const setEditingTodo = id => {
    setTodoEditing(id);
    const todo = props.todos.find(item => item.id === id);
    if (todo) {
      setEditingText(todo.text);
      setEditingTitle(todo.title);
    }
  };

  return (
    <>
      {props.todos.map(todoItem => <div key={todoItem.id} className={`todo-card ${todoItem.completed ? 'completed-card' : ''}
  ${todoItem.completed && !props.displayDone ? 'hide' : ''}
  `}>
        <div className="card-main">

          {todoEditing === todoItem.id
            ? (
              <>
                <input
                  className="edit__title-input"
                  type="text"
                  onChange={e => setEditingTitle(e.target.value)}
                  value={editingTitle}
                  placeholder="MODIFY THE TITLE"
                />
                <input
                  className="edit__text-input"
                  type="text"
                  onChange={e => setEditingText(e.target.value)}
                  value={editingText}
                  placeholder="MODIFY THE DESCRIPTION"
                />
              </>
            )
            : (
              <>
                <div className={`card-main__title ${todoItem.completed ? 'completed' : ''}`}>{todoItem.title}</div>
                <div className={`card-main__description ${todoItem.completed ? 'completed' : ''}`}>{todoItem.text}</div>
              </>
            )
          }
        </div>
        <div className="card-buttons">
          <ButtonCard todos={props.todos} toggleDone={props.toggleDone}
            deleteTodo={props.deleteTodo} editTodo={editTodo}
            todoEditing={todoEditing} setTodoEditing={setEditingTodo}
            todoItem={todoItem} />
        </div>
      </div>)}
    </>
  );
};

export default TodoCards;
