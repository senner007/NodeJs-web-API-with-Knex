import React, { useState } from 'react'
import SingleTodoList from './SingleTodoList'
import CreateEditTodo from './CreateEditTodo'

const TodoCard = (props) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [isDone, setIsDone] = useState(props.isDone);

  const onEdit = () => {
    setEditing(!editing);
    console.log(editing);
  }

  if (editing) {
    return <CreateEditTodo title={title} isDone={isDone} onCancel={onEdit} />
  } else {
    return <SingleTodoList title={title} isDone={isDone} onEdit={onEdit} />
  }
}

export default TodoCard
