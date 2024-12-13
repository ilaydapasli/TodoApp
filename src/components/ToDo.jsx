import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ToDo = ({task,toggleComplete,removed,editToDo}) => {
  return (
    <div className='Todo'>
        <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? `completed`:``}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon className='edit-icon'  icon={faPenToSquare} onClick={()=>editToDo(task.id)}/>
            <FontAwesomeIcon className='delete-icon' onClick={()=>removed(task.id)} icon={faTrash} />
        </div>
    </div>
  )
}
