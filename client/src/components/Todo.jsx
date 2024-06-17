function Todo({ task }) {
  return (
    <div className="row">
      <h2>{task.task}</h2>
      <h4>Auteur : {task.who}</h4>
      <p>DeadLine {task.deadLine}</p>
      <p>Statut: {task.status}</p>
    </div>
  );
}

export default Todo;
