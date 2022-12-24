import style from './header.module.css';
import { Form } from './components/Form/Form'

export function Header({ addNewTodo }) {
    return (
        <header className={style.bg}>
            <div className='container'>
                <Form addNewTodo={addNewTodo}/>
            </div>
        </header>
    );
}