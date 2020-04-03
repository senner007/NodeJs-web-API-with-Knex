import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TodoCard from './TodoCard'

const SingleItem = (props) => {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  useEffect( () => {
    const { match } = props;
    const id =  match.params.id;
    console.log(id);
    async function getTodoItem() {
      let todo = await axios.get(`/api/todo/${id}`);
      try {
        setTodo(todo.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getTodoItem();
  }, [])

  return ( 
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : todo.title ? (
        <TodoCard title={todo.title} isDone={todo.is_done} />
      ) : null}   
    </div>
  )
}

export default SingleItem
