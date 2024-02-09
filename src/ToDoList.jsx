import { useEffect, useState } from "react";
import { ToDo } from "./ToDo";
import { NoTodoList } from "./NoTodoList";

export function ToDoList() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue === null) return [];
    return JSON.parse(localValue);
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos])

  function handleCreate() {
    setTodos(t => [...t, { id: crypto.randomUUID(), value: "", isChecked: false }]);
  }

  function handleDelete(id) {
    setTodos(t => t.filter(todo => todo.id !== id));
  }

  function handleChange(id, newValue) {
    setTodos((todos) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, value: newValue };
        }
        return todo;
      });
      return updatedTodos;
    });
  }

  function handleCheck(id, isChecked) {
    setTodos((todos) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isChecked: isChecked };
        }
        return todo;
      });
      return updatedTodos;
    });
  }

  return (
    <>
      <section className="todos">
        {todos.length === 0 && (<NoTodoList />)}
        {todos.map((todo) => (
          <ToDo key={todo.id} value={todo.value} isChecked={todo.isChecked} handleDelete={() => handleDelete(todo.id)} handleChange={(event) => handleChange(todo.id, event.target.value)} handleCheck={(event) => handleCheck(todo.id, event.target.checked)} />
        ))}
      </section>
      <button className="btn-create" onClick={handleCreate}>+</button>
    </>
  );
}
