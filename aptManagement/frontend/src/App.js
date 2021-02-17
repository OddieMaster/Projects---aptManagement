import React from 'react'
import SignIn from './components/SignIn'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Consult from './components/Consult'
import List from './components/pageComponents/List';

function App() {
  return (
    <Router >
      <Switch>
        <Route path ="/" exact component= {SignIn}/>
        <Route path ="/register" exact component= {Register}/> 
        <Route path="/homePage" component={HomePage}/>
        <Route path="/consult" component={Consult}/>
        <Route path="/list" component={List}/>
      </Switch>
    </Router>
  );
}

export default App;
