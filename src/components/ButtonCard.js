import './ButtonCard.css';
import done from '../done.svg';
import trash from '../trash.svg';
import edit from '../edit.svg';
import ok from '../ok.svg';

const ButtonCard = props => (
  <>
    {props.todoEditing === props.todoItem.id
      ? (<button className="card-buttons__button--submit-edit" onClick={() => props.editTodo(props.todoItem.id)}>
        <img className="icon" src={ok} width="25" height="25" />
      </button>)
      : (<button className="card-buttons__button--edit" onClick={() => props.setTodoEditing(props.todoItem.id)}>
      <img className="icon" src={edit} width="25" height="25" />
    </button>)}

    <button className="card-buttons__button--done" onClick={() => props.toggleDone(props.todoItem.id)}>
      <img className="icon" src={done} width="25" height="25" />
    </button>
    <button className="card-buttons__button--remove" onClick={() => props.deleteTodo(props.todoItem.id)}>
      <img className="icon" src={trash} width="25" height="25" />
    </button>
  </>
);

export default ButtonCard;
