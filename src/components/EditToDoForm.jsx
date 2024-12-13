import React, { useState } from 'react'


export const EditToDoForm = ({editToDo,task}) => {
    const [value,setValue]=useState(task.task)
    const handleChange=(e)=>{
       setValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        
        
        e.preventDefault();
        
        editToDo(value,task.id);
        setValue("")
       
    }
   
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>

        <input type="text" value={value} className='todo-input' 
        placeholder='Update Task' onChange={handleChange}/>
    
        <button type='submit' className='todo-btn '>Update Task</button>
    </form>
  )
}
