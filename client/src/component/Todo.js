import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TodoCard from './TodoCard'
import TodoDescription from "./TodoDescription"
import TodoForm from "./TodoForm"

const Todo = ({ match }) => {

  // should be a back button here
  const [isLoading, setLoading] = useState(true)
  const [isEditMode, setIsEditMode] = useState(false);
  const [todo, setTodo] = useState({})

  const id = match.params.id;

  const toggleEdit = () => 
    setIsEditMode(prev => !prev);

  const editTodo = async (title, isDone) => {
    await axios.put(`/api/todo/${id}`, {
        title: title,
        is_done: isDone === 'true'
    });
    toggleEdit();
  }

  useEffect( () => {
    ;(async () => {
      try {
        setLoading(true);
        let todo = await axios.get(`/api/todo/${id}`);
        setLoading(false);
        setTodo(todo.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isEditMode])

  return ( 
    <>
      <TodoCard 
        setIsEditMode={setIsEditMode} 
        toggleEdit={toggleEdit} 
        isLoading={isLoading}
        id={id}
      >
        {
          !isEditMode
            ? <TodoDescription 
                isDone={todo.is_done} 
                title={todo.title}/>
            : <TodoForm
                isDone={todo.is_done}
                title={todo.title} 
                submitTodo={editTodo}
                toggleEdit={toggleEdit} 
              />        
        }      
      </TodoCard>
    </>
  )
}

export default Todo
