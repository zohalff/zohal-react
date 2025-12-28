import { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "یاد گرفتن React", done: false },
    { id: 2, title: "ساخت برند Saturn", done: true },
  ]);

  const [filter, setFilter] = useState("all");

  const completed = tasks.filter(t => t.done).length;
  const progress =
    tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100);

  const filteredTasks =
    filter === "done"
      ? tasks.filter(t => t.done)
      : filter === "todo"
      ? tasks.filter(t => !t.done)
      : tasks;

  return (
    <div className="app">
      <div className="card">
        <h1>🪐 Task Tracker</h1>
        <div className="progress">پیشرفت: {progress}%</div>

        <TaskList
          tasks={filteredTasks}
          setTasks={setTasks}
          allTasks={tasks}
        />

        <div className="filters">
          <button onClick={() => setFilter("all")}>همه</button>
          <button onClick={() => setFilter("done")}>انجام‌شده</button>
          <button onClick={() => setFilter("todo")}>ناتمام</button>
        </div>
      </div>
    </div>
  );
}

export default App;