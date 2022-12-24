import { TodoListItem } from "./components/TodoListItem/TodoListItem";

export function TodoList( { todos, changeStatusTodo, setShow, setAction, setIdToDelete} ) {
  if (!todos.length) return <p>List is empty...</p>;  
  
  return (
      <div className="container">
        <ul className="list-group">
            {todos.map((todo, index) => (
              <TodoListItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                index={index}
                completed={todo.completed}
                changeStatusTodo={changeStatusTodo}
                setShow={setShow} setAction={setAction} 
                setIdToDelete={setIdToDelete}
              />
            ))}
        </ul>
      </div>
    );
}
