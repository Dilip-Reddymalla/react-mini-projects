import { useState, useEffect } from "react";
import NoteCard from "./components/NoteCard.jsx";
import EditModal from "./components/EditModal";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [usingSearch, setUsingSearch] = useState(false);
  const [sortType, setSortType] = useState("newest");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote() {
    if (inputTitle.trim() !== "" && inputContent.trim() !== "") {
      const newNote = {
        id: Date.now(),
        title: inputTitle,
        content: inputContent,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setNotes([...notes, newNote]);
      setInputTitle("");
      setInputContent("");
    }
  }

  const handleEditClick = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  // Save updated note
  const handleSave = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note,
    );

    setNotes(updatedNotes);
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  function onDelete(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  const filterNotes = (searchTerm) => {
    const filteredNotes =
      searchTerm.trim() === ""
        ? notes
        : notes.filter(
            (note) =>
              note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              note.content.toLowerCase().includes(searchTerm.toLowerCase()),
          );
    setFilteredNotes(filteredNotes);
  };

const sortedNotes = [...notes].sort((a, b) => {
  if (sortType === "newest") {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  } else {
    return new Date(a.updatedAt) - new Date(b.updatedAt);
  }
});

const sortedFilteredNotes = [...filteredNotes].sort((a, b) => {
  if (sortType === "newest") {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  } else {
    return new Date(a.updatedAt) - new Date(b.updatedAt);
  }
});

  return (
    <>
      <div className="App">
        <h1>Notes Manager</h1>
      </div>

      <div className="container">
        <div className="input">
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="Enter the Note Title"
          />
          <input
            type="text"
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
            placeholder="Enter the Note description"
          />
          <button
            onClick={() => {
              addNote();
              setUsingSearch(false);
            }}
          >
            Add Note
          </button>
        </div>

        <div className="srch">
          <input
            type="text"
            placeholder="Search notes..."
            onChange={(e) => {
              filterNotes(e.target.value);
              setUsingSearch(true);
            }}
          />
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="newest">Newest Updated</option>
            <option value="oldest">Oldest Updated</option>
          </select>
        </div>

        <div className="view_tasks">
          {usingSearch ? (
            filteredNotes.length > 0 ? (
              sortedFilteredNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onEdit={handleEditClick}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <p>No notes available</p>
            )
          ) : notes.length > 0 ? (
            sortedNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onEdit={handleEditClick}
                onDelete={onDelete}
              />
            ))
          ) : (
            <p>No notes available</p>
          )}
          {isModalOpen && (
            <EditModal
              note={selectedNote}
              onSave={handleSave}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default App;
