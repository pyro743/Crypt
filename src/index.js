import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import List from './components/list/List';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/currency/:id" component={Detail} exact />
          <Route component={NotFound} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);