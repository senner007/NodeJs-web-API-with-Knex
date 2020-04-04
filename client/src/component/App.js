import React from 'react';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopNav />
        <div className="container">
          <Switch>
            <Route path="/new" component={CreateTodo} /> 
            <Route path="/api/todo/:id" component={Todo} /> 
            <Route path="/" exact component={ItemsBody} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
} 

export default App;
