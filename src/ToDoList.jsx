import { useState } from "react";
import ToDo from "./ToDo";

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
          <ToDo key={todo.id} handleDelete={() => handleDelete(todo.id)} />
        ))}
      </section>
      <button className="btn-create" onClick={handleCreate}>+</button>
    </>
  );
}
