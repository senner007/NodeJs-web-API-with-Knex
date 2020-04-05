import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoAjaxMethods from "../Helpers/TodoAjaxMethods"
import HistoryAction from "../Helpers/HistoryAction"
import Loader from "../Loader"

const TodoMaker = ({history}) => {

  const [isLoading, setLoading] = useState(false);
  const ajaxMethods = TodoAjaxMethods(setLoading);

  return (
    <Loader isLoading={isLoading}>
      <TodoForm submitTodo={ajaxMethods.createTodo} submitResponse={HistoryAction(history).goToRoot}/>
    </Loader>
  )
}

export default TodoMaker
