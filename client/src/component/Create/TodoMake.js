import React from 'react'
import TodoForm from './TodoForm'
import axios from 'axios';

const TodoMake = ({history}) => {

  const createTodo = async (title, isDone) => {
    await axios.post('/api/todo', {title: title, is_done: isDone === 'true' });
  }

  const createTodoResponse = () => {
    history.push('/');
  }

  return <TodoForm submitTodo={createTodo} submitResponse={createTodoResponse}/>

}

export default TodoMake
