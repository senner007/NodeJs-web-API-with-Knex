import React from 'react';
import TopNav from './component/TopNav';
import TodosListDisplay from './component/TodoList/TodosListDisplay';
import Todo from './component/Todo/Todo';
import TodoMaker from './component/Create/TodoMaker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function TodoApp() {
  return (
    <BrowserRouter>
      <div>
        <TopNav />
        <div className="container">
          <Switch>
            <Route path="/new" component={TodoMaker} /> 
            <Route path="/api/todo/:id" component={Todo} /> 
            <Route path="/" exact component={TodosListDisplay} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
} 

export default TodoApp;
