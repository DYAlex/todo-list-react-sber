import styles from './todoListItem.module.css'

export function TodoListItem( {title, id, index, completed, changeStatusTodo, setShow, setAction, setIdToDelete} ) {

  const completeHandler = () => {
		changeStatusTodo(id)
	}

	const deleteHandler = () => {
		setShow(true);
    setAction(`delete task ${title}`);
    setIdToDelete(id);
  }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className={completed ? styles.done : ''}>
              {index + 1}. {title}
            </span>
            <div className='styles.container'>
              <button onClick={completeHandler} type="button" className= {completed ? "btn btn-success mx-2" : "btn btn-primary mx-2"}>
                {completed ? "Undone" : "Done"}
              </button>
              <button onClick={deleteHandler} type="button" className="btn btn-danger" >Delete</button>
            </div>
        </li>
    );
}

