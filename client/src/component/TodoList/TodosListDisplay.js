import React, { useState, useEffect } from 'react'
import TodoList from './TodoList';
import TodoLink from './TodoLink';
import axios from 'axios';

const TodosListDisplay = (props) => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect( () => {
    getTodos();
    setLoading(false);
  }, [])

  const getTodos = async () => {
    const TodoList = await axios.get('/api/todo');
    setTodos(TodoList.data)
  }

  return (
    <div>
      { 
        loading 
          ? <h1>Loading...</h1> 
          : <TodoList>
            {
              todos.map(todo => 
                todo.title 
                  && <TodoLink title={todo.title} isDone={todo.is_done} key={todo.id} id={todo.id} /> 
                )
            }
            </TodoList>
      }
    </div>
  )
}

export default TodosListDisplay;
