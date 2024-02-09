import { Header } from "./Header"
import { ToDoList } from "./ToDoList";

export default function App() {
  return (
    <div className="container">
      <Header />
      <ToDoList />
    </div>
  );
}