import React, { useState } from 'react'
import SingleTodoList from './SingleTodoList'
import CreateTodo from './CreateTodo'
import TodoDescription from "./TodoDescription"
import EditTodo from "./EditTodo"
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const TodoCard = (props) => {

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [isDone, setIsDone] = useState(props.isDone);
  
  const onDeleteTodo = () => {
    console.log('I should be deleted')
    axios.delete(`${props.id}`).then((result) => {
      console.log("dsda")
       history.push('/');
    })
  }

  const toggleEdit = () => {
    setEditing(prev => !prev)
  }

  return (
    <>
    {
      !editing
        ? <TodoDescription onDeleteTodo={onDeleteTodo} isDone={isDone} title={title}/>
        : <EditTodo/>
    }
      <button onClick={onDeleteTodo}>Delete</button>
      <button className="btn btn-link text-white" onClick={toggleEdit}>Edit</button>
    </>
  )

}

export default withRouter(TodoCard)
