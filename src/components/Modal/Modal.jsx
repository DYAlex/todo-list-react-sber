import './modal.css';

export const Modal = ({ show, setShow, action, idToDelete, deleteTodo, clearAllTodos }) => {
    if (!show) {
        return null;
    }

    const btnText = action.startsWith('delete') ? 'Delete' : 'Clear All';
    const confirmHandler = () => {
        setShow(false);
        if (idToDelete && action.startsWith('delete')) {
            deleteTodo(idToDelete);
        } 
        if (action.startsWith('clear')) {
            clearAllTodos();
        }
    }

    const cancelHandler = () => {
        setShow(false);
    }

    if (action === 'List is empty') {
        return (
            <div className='modal' onClick={cancelHandler}>
                <div className= 'modal-content'>
                    <div className="modal-header">
                        <h5 className="modal-title">Nothing to clear!</h5>
                        <button onClick={cancelHandler} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{action}</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={cancelHandler} type="button" className="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
                        <button onClick={confirmHandler}  type="button" className="btn btn-danger" disabled>Nothing to clear!</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='modal' onClick={cancelHandler}>
            <div className= 'modal-content'>
                <div className="modal-header">
                    <h5 className="modal-title">This action is irreversible!</h5>
                    <button onClick={cancelHandler} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Would you like to {action}?</p>
                </div>
                <div className="modal-footer">
                    <button onClick={cancelHandler} type="button" className="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
                    <button onClick={confirmHandler}  type="button" className="btn btn-danger">{ btnText }</button>
                </div>
            </div>
        </div>
    );
}