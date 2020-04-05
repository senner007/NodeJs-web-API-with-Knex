import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import TodoView from "./TodoView"
import TodoForm from "../Create/TodoForm"
import { withRouter } from 'react-router-dom'
import TodoActions from "./TodoActions";
import TodoAjaxMethods from "../Helpers/TodoAjaxMethods"
import HistoryAction from "../Helpers/HistoryAction"

const Todo = ({ match, history }) => {

  const [isLoading, setLoading] = useState(true)
  const [isEditMode, setIsEditMode] = useState(false);
  const [todo, setTodo] = useState({})

  const id = match.params.id;
  const ajaxMethods = TodoAjaxMethods(setLoading);

  const toggleEdit = () => 
    setIsEditMode(prev => !prev);

  useEffect(() => {
    ajaxMethods.getById(id)
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
                submitTodo={ajaxMethods.editTodo.bind(null, id)}
                toggleEdit={toggleEdit}
                submitResponse={toggleEdit}
              />
            : <TodoView 
                isDone={todo.is_done} 
                title={todo.title}>
                  <TodoActions 
                  onDelete={ajaxMethods.deleteTodo.bind(null, id)} 
                  deleteResponse={HistoryAction(history).goToRoot} 
                  toggleEdit={toggleEdit}/>
              </TodoView>        
        }      
      </Loader>
    </>
  )
}

export default withRouter(Todo);
