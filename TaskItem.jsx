function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <span
        className={task.done ? "done" : ""}
        onClick={() => onToggle(task.id)}
      >
        {task.title}
      </span>

      <button onClick={() => onDelete(task.id)}>🗑</button>
    </li>
  );
}

export default TaskItem;