import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';

const Taskform = ({ add, length}) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)
 
    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: "blue",
        fontWeight:"bold"
    }

    const urgentStyle = {
        color: "yellow",
        fontWeight:"bold"
    }

    const blokingStyle = {
        color: "tomato",
        fontWeight:"bold"
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
        <div className='form-outline flex-fill'>
            <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task name' />
            <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'/>
            {/* <label htmlFor='selectLevel' className='sr-only p'>Priority</label> */}
            <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                <option style={  normalStyle } value={LEVELS.NORMAL}>
                    Normal
                </option>
                <option style={ urgentStyle } value={LEVELS.URGENT}>
                    Urgente
                </option>
                <option style={ blokingStyle } value={LEVELS.BLOCKING}>
                    Blocking
                </option>
            </select>
            <button type='submit' className='btn btn-success btn-lg ms-2'>{ length > 0 ? "Add new task" : "Create your first task"}</button>
        </div>
        </form>
    );
}

Taskform.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
