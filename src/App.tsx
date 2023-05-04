import { useState } from "react";
import TaskContainer from "./components/TaskContainer";
import TaskItem from "./components/TaskItem";

function App() {
  const listaTarefas = useState([]);
  return (
    <main className="container">
      <h1 className="m-5">📝 Task Manaer</h1>
      <div id="new-task">
        <button id="btnAdd" className="btn btn-primary">
          add
        </button>
      </div>
      <TaskContainer>
        <TaskItem titulo="tarefa 1" />
        <TaskItem titulo="tarefa 2" done={true} />
      </TaskContainer>
    </main>
  );
}

export default App;
