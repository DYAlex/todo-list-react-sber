import style from './footer.module.css';

export function Footer({ todos, setShow, setAction }) {

    const clearHandler = () => {
      if (!todos.length) {
        setAction('List is empty');
        setShow(true);
      } else {
        setAction('clear all TODOs from the list');
        setShow(true);
      }
    }

    return (
      <div className={style.bg}>
        <button className='btn btn-danger' onClick={clearHandler} >Clear TODO list</button>
      </div>
    );
}
