import React from 'react';
import { useParams } from "react-router-dom";
import { taskList } from '../../components/pure/taskData';


function getTaskById(taskId) {
  // Supongamos que tienes una lista de tareas llamada taskList
  const task = taskList.find(task => task.id === parseInt(taskId));
  return task; // Devuelve la tarea encontrada o undefined si no se encuentra ninguna tarea con el ID proporcionado
}

const TaskdetailPage = () => {

    const {id} = useParams();
    const task = getTaskById(id);
    return (
        <div>
            { task != null ? (<h1>Task Detail - {id}</h1>) : (<h1>Task Detail - there is no more tasks to show</h1>)}
            { task != null ? (<h2>{ task.name }</h2>) : ('')}
            { task != null ? (<h3>{ task.description }</h3>) : ('')}
        </div>
    );
}

// function TaskdetailPage({ task }) {
//     const { id, name, description } = task;
//     // Lógica para obtener y mostrar detalles de la tarea con el id proporcionado
    
//     return (
//       <div>
//         <h1>Task Detail - {id}</h1>
//         <h2>{name}</h2>
//         <h2>{description}</h2>
//         {/* Otros detalles de la tarea */}
//       </div>
//     );
//   }
  

export default TaskdetailPage;
