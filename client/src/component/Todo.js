import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TodoCard from './TodoCard'

const Todo = ({ match }) => {

  // should be a back button here
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  useEffect( () => {
    ;(async () => {
      try {
        let todo = await axios.get(`/api/todo/${match.params.id}`);
        setLoading(false);
        setTodo(todo.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  return ( 
    <>
      {
        loading 
          ? <h3>Loading...</h3>
          : <TodoCard title={todo.title} isDone={todo.is_done} id={todo.id}/>
      }
    </>
  )
}

export default Todo
