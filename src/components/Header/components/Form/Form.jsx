import { useState } from "react";

export const Form = ({addNewTodo}) => {
    const [title, setTitle] = useState('');

    const changeHandler = (e) => {
        setTitle(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (title.length) {
            addNewTodo(title);
            setTitle('');
        }
    }

    return (
        // разметка формы
        <form onSubmit={submitHandler} className="d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-auto d-flex align-items-center">
                    <label htmlFor="inputField" className="form-label">Enter new TODO item</label>
                </div>
                <div className="col-auto">
                    <input value={title} onChange={changeHandler} 
                    placeholder="Title..." type="text" id="inputField" className="form-control mb-2"/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Add Todo</button>
                </div>
            </div>
        </form>
    );
}