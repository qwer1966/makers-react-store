import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Views/MainPage/MainPage';
import ProductDetailPage from './Views/ProductDetailPage/ProductDetailPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/products/:id" component={ProductDetailPage} exact />
      </Switch>
    </Router>
  );
}
