import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToDoForm = ({addTodo}) => {
    const [value,setValue]=useState("")
    const handleChange=(e)=>{
       setValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    if (value.trim().length === 0) {
        toast.error(`Please enter the  task`, {
        
          autoClose: 3000,
        });
        return;
      }
      toast.success(`"${value}" task added!`, {
        
        autoClose: 3000,
      });
        addTodo(value);
        setValue("")
    }
   
  return (
    <>
     <ToastContainer />
    <form className='TodoForm' onSubmit={handleSubmit}>

        <input type="text" value={value} className='todo-input' 
        placeholder='What is the task' onChange={handleChange}/>
    
        <button type='submit' className='todo-btn '>Add Task</button>
    </form>
    </>
  )
}
