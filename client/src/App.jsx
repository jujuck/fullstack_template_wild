import { useLoaderData } from "react-router-dom";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const tasks = useLoaderData();

  return (
    <main className="container">
      <h1>To-Do List</h1>
      <section>
        {tasks.map((task) => (
          <Todo task={task} key={task.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
