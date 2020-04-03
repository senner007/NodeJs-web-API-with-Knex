import React, { useState, useEffect } from 'react'
import ListItems from './ListItems';
import ListItem from './ListItem';
import axios from 'axios';
import _ from 'lodash';

const ItemsBody = (props) => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState({});

  useEffect( () => {
    getTodos();
    setLoading(false);
  }, [])

  const getTodos = async () => {
    const TodoList = await axios.get('/api/todo');
    setTodos(TodoList.data)
  }
  
  const renderTodos = () => {
    return _.map(todos, todo => {
      return todo.title ? (
        <ListItem title={todo.title} isDone={todo.is_done} key={todo.id}/> 
        ) : null;
    });
  }

  return (
    <div>
      { loading ? <h1>Loading...</h1> : <ListItems>{renderTodos()}</ListItems>}
    </div>
  )
}

export default ItemsBody;
