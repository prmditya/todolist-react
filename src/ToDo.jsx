export default function ToDo({ key, handleDelete }) {
  return (
    <div className="card-todo" key={key}>
      <input type="checkbox" />
      <input className="input-todo" type="text" placeholder="Your To-Do here..." />
      <button className="btn-delete" onClick={handleDelete}>✖</button>
    </div>
  )
}