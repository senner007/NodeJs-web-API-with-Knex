import React, { useState } from 'react'
import SingleTodoList from './SingleTodoList'
import CreateEditTodo from './CreateEditTodo'

const TodoCard = (props) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [isDone, setIsDone] = useState(props.isDone);

  const toggleEdit = () => {
    setEditing(!editing);
  }

  const updateTodo = (title, isDone) => {
    setTitle(title);
    setIsDone(isDone);
  }

  const onDelete = () => {
    console.log('deleted')
  }

  if (editing) {
    return <CreateEditTodo title={title} isDone={isDone} toggleEdit={toggleEdit} id={props.id} updateTodo={updateTodo}/>
  } else {
    return <SingleTodoList title={title} isDone={isDone} toggleEdit={toggleEdit} id={props.id} />
  }
}

export default TodoCard
