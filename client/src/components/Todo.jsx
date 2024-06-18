function Todo({ task }) {
  return (
    <div>
      <h2>{task.task}</h2>
      <h4>Auteur : {task.who}</h4>
      <p>DeadLine {task.deadline}</p>
      <p>Status: {task.status}</p>
    </div>
  );
}

export default Todo;
