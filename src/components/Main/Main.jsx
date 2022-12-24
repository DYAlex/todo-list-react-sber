import { TodoList } from "./components/TodoList/TodoList";

export function Main( { todos, changeStatusTodo, setShow, setAction, setIdToDelete }) {
    return (
      <div className="App">
        <TodoList todos={todos} changeStatusTodo={changeStatusTodo}
        setShow={setShow}  setAction={setAction} setIdToDelete={setIdToDelete}
        />
      </div>
    );
}
