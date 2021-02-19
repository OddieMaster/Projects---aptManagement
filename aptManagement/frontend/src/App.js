import React, {useState} from 'react'
import SignIn from './components/SignIn'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Consult from './components/Consult'
import List from './components/pageComponents/List'
import EditPage from './components/pageComponents/EditPage'
import Delete from './components/pageComponents/Delete'


function App() {



  const [data, setData] = useState(
    [
        {id: 1, apartment: "1", bloc: "1"},
        {id: 2, apartment: "2", bloc: "2"},
        {id: 3, apartment: "3", bloc: "3"},
        {id: 4, apartment: "4", bloc: "4"},
        {id: 5, apartment: "5", bloc: "5"},
        {id: 6, apartment: "6", bloc: "6"},
    ]
)

  return (
    <Router >
      <Switch>
        <Route path ="/" exact component= {SignIn}/>
        <Route path ="/register" exact component= {Register}/> 
        <Route path="/homePage" component={HomePage}/>

        <Route path="/consult"> 
          <Consult  
            data={data}

          /></Route>

        <Route path="/List"> 
          <List 
            data={data}
          /></Route>

        <Route path="/EditPage"> 
          <EditPage 
            data={data}
          /></Route> 

        <Route path="/Delete"> 
          <Delete 
            data={data}
          /></Route> 
      </Switch>
    </Router>
  );
}

export default App;
