import axios from "axios";
import React, { useEffect, useState } from "react";
import { useToken } from "../hooks/useToken";

export default function Main() {
  const [tasks, setTasks] = useState([]);

  const { token } = useToken();

  const getTasks = async () => {
    try {
      console.log(token)
      const { data } = await axios.get("http://localhost:8080/tasks", {
        headers: {
          "authorization": token ,
          "Content-Type": "application/json",
        },
      });
      console.log(data.tasks);
      setTasks(data.tasks);
    } catch (error) {
      console.log(error.message);
      alert("Error al obtener las tareas");
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <h2>Inicio</h2>
      {tasks && (
        <div>
          <h3>Lista de Tareas</h3>
          <ol>
            {tasks.map((task) => (
              <li key={task._id}>{task.title}</li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}
