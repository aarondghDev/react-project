import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/task';

// Importamos la hoja de estilos de task.scss

import "../../styles/task.scss";
import Taskform from '../pure/forms/taskForm';



const TaskListComponent = () => {

    const defaultTask1 = new Task("Example1", "Description 1", true, LEVELS.NORMAL);
    const defaultTask2 = new Task("Example2", "Description 2", false, LEVELS.URGENT);
    const defaultTask3 = new Task("Example3", "Description 3", false, LEVELS.BLOCKING);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
     useEffect(() => {
         console.log("Task state has been modified");
         setTimeout(() => {
            setLoading(false);
         }, 2000); // 2000 = 2s el tiempo hay qu eponerlo en microsegundos, si supera este tiempo devuelve false
         return () => {
             console.log("TaskList component is going to unmount");
         };
     }, [tasks]);

    function completeTask(task) {
        console.log("Complete this task:", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the component with the new listo of tasks and it will update the iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        console.log("Delete this task:", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log("Complete this task:", task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }


    const Table = () => {
        return(                   
        <table>
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody> 
            {/* Abajo estamos iterando con el conjunto de los datos aplicando un mapeo de los datos con .map. Esto se ejecutara el return tantas veces como tareas haya dentro de la lista de tareas */}
                { tasks.map ((task, index) => {
                    return (
                        <TaskComponent
                            key={index} 
                            task={task}
                            complete={completeTask}
                            remove={deleteTask}
                            >
                        </TaskComponent> 
                    )
                })}{/* El key es para que react sea capaz de saber cuando cada una de ellas a sido modificada y poder modificarla mejor, si no se lo pasamos puede que no dara problemas pero cuando lancemos la app si puede provocar problemas mas adelante */}
            </tbody>
        </table>)
    }
    let taskTable = <Table></Table>
    if(tasks.length > 0) {
        taskTable = <Table></Table>   
    }else {
        taskTable =
        <div>
             <h3>There are no tasks to show</h3>
             <h4>Please create one</h4>
        </div>
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Task:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar="true" style={ {position: "relative", height: "400px"}}>
                    {loading ? <div className="spinner-border" role="status"><span className="sr-only"></span>
                    </div>
                    : taskTable }
                </div>
                </div>
            </div>

    {/* TODO: Aplicar un For/Map para renderizar a una lista*/}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
            <Taskform add={ addTask } length={tasks.length}></Taskform>
            </div>
    );
};
export default TaskListComponent;
