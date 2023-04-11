import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskComtext";

function TaskForm({}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSumbuit = (e) => {
    e.preventDefault();
    //console.log(title, description)
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSumbuit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <textarea
        placeholder="Describe tu tarea"
        onChange={(e) => setDescription(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2"
        value={description}
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
