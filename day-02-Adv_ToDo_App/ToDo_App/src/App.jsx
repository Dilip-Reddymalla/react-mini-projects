import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState("");

  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        title: inputValue.trim(),
        completed: false,
      };
      setTasks([...tasks, newTodo]);
      setInputValue("");
    }
  };

  useEffect(()=>{
    function handleKeyShortcut(e) {
      if (e.key === "Enter"){ addTask();
      setInputValue("");
      }
    }

    window.addEventListener("keydown", handleKeyShortcut);
    return () => window.removeEventListener("keydown", handleKeyShortcut);
  },[tasks, inputValue]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function openEditModal(task) {
    const newTitle = prompt("Edit task title:", task.title);
    if (newTitle !== null && newTitle.trim() !== "") {
      const updatedTasks = tasks.map((t) =>
        t.id === task.id ? { ...t, title: newTitle.trim() } : t,
      );
      setTasks(updatedTasks);
    }
  }

  function filterTasks(task) {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "pending") {
      return !task.completed;
    }
    return true;
  }


  return (
    <div className="container">
      <h1>ToDo App</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="options">
        <label htmlFor="choice">Select the filter:</label>
        <select
          id="choice"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="tasks">
        {tasks.map(
          (task, index) =>
            filterTasks(task) && (
              <div key={index} className="task">
                {task.title}
                <div className={task.completed ? "completed" : "not-completed"}>
                  {task.completed ? "Status: Completed" : "Status: Not completed"}
                </div>
                <button
                  onClick={() => {
                    const updatedTasks = tasks.map((t) =>
                      t.id === task.id ? { ...t, completed: !t.completed } : t,
                    );
                    setTasks(updatedTasks);
                  }}
                >
                  Toggle
                </button>
                <button onClick={() => openEditModal(task)}>Edit</button>
                <button
                  onClick={() => {
                    const updatedTasks = tasks.filter((t) => t.id !== task.id);
                    setTasks(updatedTasks);
                  }}
                >
                  Delete
                </button>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default App;
