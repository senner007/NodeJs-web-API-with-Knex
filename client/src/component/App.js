import React from 'react';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import SingleItem from './SingleItem';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopNav />
        <div className="container">
          <Switch>
            <Route path="/api/todo/:id" component={SingleItem} /> 
            <Route path="/" exact component={ItemsBody} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
} 

export default App;
