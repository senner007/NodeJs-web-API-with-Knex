import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Loader'
import TodoView from "./TodoView"
import TodoForm from "../Create/TodoForm"
import { withRouter } from 'react-router-dom'
import TodoActions from "./TodoActions"

const Todo = ({ match, history }) => {

  // TODO : should be a back button here
  const [isLoading, setLoading] = useState(true)
  const [isEditMode, setIsEditMode] = useState(false);
  const [todo, setTodo] = useState({})

  const id = match.params.id;

  const toggleEdit = () => 
    setIsEditMode(prev => !prev);

  const deleteTodo = async () => {
    await axios.delete(`${id}`);
    history.push('/');
  }
  
  const editTodo = async (title, isDone) => {
    await axios.put(`/api/todo/${id}`, {
        title: title,
        is_done: isDone === 'true'
    });
  }

  useEffect(() => {
    getTodoById(id, setLoading)
      .then(todo => setTodo(todo))
  }, [isEditMode])

  return ( 
    <>
      <Loader isLoading={isLoading}>
        {
          isEditMode 
            ? <TodoForm
                isDone={todo.is_done}
                title={todo.title} 
                submitTodo={editTodo}
                toggleEdit={toggleEdit}
                submitResponse={toggleEdit}
              />
            : <TodoView 
                isDone={todo.is_done} 
                title={todo.title}>
                  <TodoActions onDelete={deleteTodo} toggleEdit={toggleEdit}/>
              </TodoView>        
        }      
      </Loader>
    </>
  )
}

const getTodoById = async (id, setLoading) => {
  try {
    setLoading(true);
    let todo = await axios.get(`/api/todo/${id}`);
    setLoading(false);
    return todo.data;
  } catch (error) {
    console.log(error);
  }
}

export default withRouter(Todo);
