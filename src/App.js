import './App.css';
import { useState } from "react";
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Main } from './components/Main/Main'
import { Modal } from './components/Modal/Modal'

function App() {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const [action, setAction] = useState('');
  const [idToDelete, setIdToDelete] = useState(null);

  const addNewTodo = (title) => {
      const newTodo = {
          id: crypto.randomUUID(),
          comleted: false,
          title //  Это сокращение для title: title
      }
      setTodos((prev) => [...prev, newTodo])
  }

  const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const changeStatusTodo = (id) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }));
  }

  const clearAllTodos = () => {
      setTodos([]);
  }

  return (
    <div className="App">
      <Header addNewTodo={addNewTodo} />
      <hr />
      <Main todos={todos} changeStatusTodo={changeStatusTodo} setShow={setShow} setAction={setAction} setIdToDelete={setIdToDelete} />
      <hr />
      <Footer todos={todos} setShow={setShow} setAction={setAction} />
      <Modal show={show} setShow={setShow} action={action} setAction={setAction} idToDelete={idToDelete} deleteTodo={deleteTodo} clearAllTodos={clearAllTodos} setIdToDelete={setIdToDelete} />
    </div>
  );
}

export default App;
