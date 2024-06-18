import { useState } from "react";
import connexion from "../services/connexion";

const initialTask = {
  task: "",
  who: "",
  deadline: "",
  status_id: null,
};

function Form() {
  const [task, setTask] = useState(initialTask);

  const handleTask = (event) => {
    setTask((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await connexion.post("/api/tasks", task);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <label>
        Task:
        <input
          type="text"
          value={task.task}
          name="task"
          onChange={(event) => handleTask(event)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
