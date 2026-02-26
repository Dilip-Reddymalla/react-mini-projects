import "./NoteStyling.css"

function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div key={note.id} className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>Created At: {new Date(note.createdAt).toLocaleString()}</small>
      <small>Updated At: {new Date(note.updatedAt).toLocaleString()}</small>
      <br />
      <button onClick={() => onEdit(note)}>Edit</button>
      <button className="del-btn" onClick={()=> onDelete(note.id)}>Delete</button>
    </div>
  );
}

export default NoteCard;