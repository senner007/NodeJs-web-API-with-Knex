import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import TodoView from "./TodoView"
import TodoForm from "../Create/TodoForm"
import { withRouter } from 'react-router-dom'
import TodoActions from "./TodoActions";
import TodoAjaxMethods from "../Helpers/TodoAjaxMethods"

const Todo = ({ match, history }) => {

  // TODO : should be a back button here
  const [isLoading, setLoading] = useState(true)
  const [isEditMode, setIsEditMode] = useState(false);
  const [todo, setTodo] = useState({})

  const ajaxMethods = TodoAjaxMethods(match, history);

  const toggleEdit = () => 
    setIsEditMode(prev => !prev);

  useEffect(() => {
    ajaxMethods.getById(setLoading)
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
                submitTodo={ajaxMethods.editTodo}
                toggleEdit={toggleEdit}
                submitResponse={toggleEdit}
              />
            : <TodoView 
                isDone={todo.is_done} 
                title={todo.title}>
                  <TodoActions onDelete={ajaxMethods.deleteTodo} toggleEdit={toggleEdit}/>
              </TodoView>        
        }      
      </Loader>
    </>
  )
}


export default withRouter(Todo);
