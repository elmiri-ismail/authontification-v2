import React from 'react';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormSuccess from './FormSuccess';
import './App.css';
import Form from './Form';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' ><Form /></Route>
        <Route exact path='/Login' ><Login /></Route>
        <Route exact path='/FormSuccess' ><FormSuccess /></Route>
        {/* <Route path='/Login' element={<Login />} /> */}
      </Switch>
    </Router>
  );
}

export default App;
