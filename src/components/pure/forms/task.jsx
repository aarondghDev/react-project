import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// Importamos la hoja de estilos de task.scss
import "../../../styles/task.scss"
// Modelos
import { Task } from '../../../models/task.class.js';
import { LEVELS } from '../../../models/levels.enum.js';


const TaskComponent = ({ task, complete, remove }) => {
    useEffect(() => {
        console.log("Created Task");
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    /**
     * Function that returns a badge depending on the level of the task
     * switch case
     */
    function taskLevelBadge() {
switch (task.level) {
    case LEVELS.NORMAL:
        return(
            <h6 className='mb-0'>
                <span className='badge bg-primary'>
                    {task.level}
                </span>
            </h6>)

    case LEVELS.URGENT:
        return(<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)

    case LEVELS.BLOCKING:
        return(<h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)


    default:
        break;
}
    }

    /**
     * 
     * Funtion that returns icon depending on completion of the task
     */
    function taskCompletedIcon() {
        if(task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color:"green"}}></i>
            );
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color:"grey"}}></i>
            );
        }
    }

    const taskCompleted = {
        backgroundColor: "grey",
        color: "white",
        textDecoration: "line-through",
        width: "100%",
        fontWeight: "bold"
    };

    const taskPending = {
        backgroundColor: "white",
        color: "black",
        fontWeight: "bold"
    };

    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
            {/* Execution of function to return badge element */}
            {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por icono */}
                {/* Execution of the function to return icon depending on completion */}
                { taskCompletedIcon() }
                <i className='bi-trash task-action' style={{color: "tomato"}} onClick={() => remove(task)}></i>

            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;


