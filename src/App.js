import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import User from './Components/User';
import Article from './Components/Article';
import AddArticle from './Components/AddArticle';
import './App.css';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet"></link>
        <Router>
          <Route path={`/`} component={Header}></Route>
          <Route exact path={`/`} component={Home}></Route>
          <Route exact path={`/login`} component={Login}></Route>
          <Route exact path={`/register`} component={Register}></Route>
          <Route exact path={`/users/me`} component={User}></Route>
          <Route exact path={`/articles/:id`} component={Article}></Route>
          <Route exact path={`/new/articles`} component={AddArticle}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
