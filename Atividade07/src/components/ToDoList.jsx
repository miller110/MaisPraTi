/*
3. Lista de Tarefas: Crie um aplicativo de lista de tarefas (to-do list) onde o usuário pode adicionar
 e remover tarefas. Use useState para armazenar a lista de tarefas e renderize cada tarefa como um 
 item de lista. Desafio: permita que o usuário marque as tarefas como concluídas e filtre para ver 
 apenas as tarefas pendentes.
 */

import React, { useState } from "react";
import "../css/ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;

    const newTaskList = [
      ...tasks,
      { id: Date.now(), text: newTask, completed: false },
    ];
    setTasks(newTaskList);
    setNewTask("");
  }

  function completeTask(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  function removeTask(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <section id="ex03" style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2 style={{ color: "#333", marginBottom: "1rem" }}>Lista de Tarefas</h2>
      <div id="inputContainer" style={{ display: "flex", marginBottom: "1rem" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicione uma tarefa"
          style={{
            flex: "1",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginRight: "0.5rem",
          }}
        />
        <button
          id="addTaskButton"
          onClick={addTask}
          style={{
            padding: "0.5rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Adicionar
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
              marginBottom: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: task.completed ? "#e0ffe0" : "#fff",
            }}
          >
            <span
              onClick={() => completeTask(task.id)}
              style={{
                flex: "1",
                textAlign: "left",
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#999" : "#000",
              }}
            >
              {task.text}
            </span>
            <button
              id="removeTaskButton"
              onClick={() => removeTask(task.id)}
              style={{
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                padding: "0.3rem 0.6rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Apagar
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p style={{ color: "#999" }}>Nenhuma tarefa adicionada.</p>}
    </section>
  );
}

export default ToDoList;
