export function ToDo({ key, value, isChecked, handleDelete, handleChange, handleCheck }) {
  return (
    <div className="card-todo" key={key}>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <input className="input-todo" value={value} onChange={handleChange} type="text" placeholder="Your To-Do here..." />
      <button className="btn-delete" onClick={handleDelete}>✖</button>
    </div>
  )
}