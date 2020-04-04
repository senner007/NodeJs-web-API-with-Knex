import React from 'react';
import TopNav from './component/TopNav';
import TodosListDisplay from './component/TodoList/TodosListDisplay';
import Todo from './component/Todo/Todo';
import TodoMake from './component/Create/TodoMake';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function TodoApp() {
  return (
    <BrowserRouter>
      <div>
        <TopNav />
        <div className="container">
          <Switch>
            <Route path="/new" component={TodoMake} /> 
            <Route path="/api/todo/:id" component={Todo} /> 
            <Route path="/" exact component={TodosListDisplay} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
} 

export default TodoApp;
