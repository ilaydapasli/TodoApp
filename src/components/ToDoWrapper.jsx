import React, { useEffect, useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo';
import { EditToDoForm } from './EditToDoForm';
 
uuidv4();
//uuidv4 ıd olarak eşsiz bir isim vermek için uygundur


export const ToDoWrapper = () => {
    const [todos, setTodos] = useState(() => {
        // localStorage'dan mevcut görevleri yükle
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
      });
    
      useEffect(() => {
        // Görevler değiştiğinde localStorage'a kaydet
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

    const addTodo=(todo)=>{
        setTodos([...todos,{id: uuidv4(),task:todo,
            completed:false,isEditing:false}])
            console.log(todos)
    }
    const toggleComplete=id=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
    }
    const removed=id=>{
         
        setTodos(todos.filter(todo => todo.id !== id))
        
    }
    const editToDo=id=>{
        
        setTodos(todos.map(todo =>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
    }
    const editTask =(task,id) =>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,task,isEditing: !todo.isEditing}:todo))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Get This Done</h1>
        <ToDoForm addTodo={addTodo}/>
        {todos.map((todo,index)=>(
            todo.isEditing ? (
                <EditToDoForm editToDo={editTask} task={todo}/>
            ):(
                
                <ToDo editToDo={editToDo} removed={removed} task={todo} key={index} toggleComplete={toggleComplete}/>
            )
           
        ))}
        
    </div>
  )
}
