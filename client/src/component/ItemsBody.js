import React, { useState, useEffect } from 'react'
import ListItems from './ListItems';
import ListItem from './ListItem';
import axios from 'axios';
import _ from 'lodash';

const ItemsBody = (props) => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState({});

  useEffect( () => {
    async function getTodos() {
      const TodoList = await axios.get('/api/todo');
      setLoading(false);
      setTodos(TodoList.data)
    }
    getTodos();
  }, [])
  
  const renderTodos = () => {
    return _.map(todos, todo => {
      return (
        <ListItem title={todo.title} isDone={todo.is_done} key={todo.id}/>
      )
    })
  }

  if (loading === true) {
   return (
     <h1>Loading...</h1>
   ) 
  }
  return (
    <ListItems>
       {renderTodos()}
    </ListItems>
  )
}

export default ItemsBody;
