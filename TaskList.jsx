import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks, allTasks }) {
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;

    setTasks([
      ...allTasks,
      { id: Date.now(), title: text, done: false },
    ]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(
      allTasks.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(allTasks.filter(t => t.id !== id));
  };

  return (
    <>
      <div className="inputBox">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="تسک جدید..."
        />
        <button onClick={addTask}>+</button>
      </div>

      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;