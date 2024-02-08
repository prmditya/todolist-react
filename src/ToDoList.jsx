import { useState } from "react";

export default function ToDoList() {

  const [todos, setTodos] = useState([]);

  function handleCreate() {
    setTodos(t => [...t, { id: crypto.randomUUID() }]);
  }

  function handleDelete(id) {
    setTodos(t => t.filter(todo => todo.id !== id));
  }

  return (
    <>
      <section className="todos">{
        todos.map((todo) => (
          <div className="card-todo" key={todo.id}>
            <input type="checkbox" />
            <input className="input-todo" type="text" placeholder="Your To-Do here..." />
            <button className="btn-delete" onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))
      }
      </section>
      <button className="btn-create" onClick={handleCreate}>+</button>
    </>
  );
}
