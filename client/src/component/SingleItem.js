import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TodoCard from './TodoCard'

const SingleItem = (props) => {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  useEffect( () => {
    const { match } = props;
    const id =  match.params.id;
    getTodoItem(id);
    setLoading(false);
  }, [])

  const getTodoItem = async (id) => {
    try {
      let todo = await axios.get(`/api/todo/${id}`);
      setTodo(todo.data);
    } catch (error) {
      console.log(error);
    }
  }

  return ( 
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : todo.title ? (
        <TodoCard title={todo.title} isDone={todo.is_done} id={todo.id}/>
      ) : null}   
    </div>
  )
}

export default SingleItem
