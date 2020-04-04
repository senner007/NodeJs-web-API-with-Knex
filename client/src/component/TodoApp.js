import React from 'react';
import TopNav from './TopNav';
import TodosListDisplay from './TodosListDisplay';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function TodoApp() {
  return (
    <BrowserRouter>
      <div>
        <TopNav />
        <div className="container">
          <Switch>
            <Route path="/new" component={CreateTodo} /> 
            <Route path="/api/todo/:id" component={Todo} /> 
            <Route path="/" exact component={TodosListDisplay} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
} 

export default TodoApp;
