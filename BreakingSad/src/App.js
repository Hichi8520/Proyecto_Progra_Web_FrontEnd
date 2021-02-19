//import logo from './assets/images/logo.svg';
import React from 'react';
import './assets/css/App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import User from './components/pages/User';
import SignUp from './components/pages/SignUp';
import Characters from './components/pages/Characters';
import Episodes from './components/pages/Episodes';
import Quotes from './components/pages/Quotes';
import Customize from './components/pages/Customize';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/search' component={Search} />
        <Route path='/user' component={User} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/characters' component={Characters} />
        <Route path='/episodes' component={Episodes} />
        <Route path='/quotes' component={Quotes} />
        <Route path='/customize' component={Customize} />
      </Switch>
      
    </Router>
    </>
  );
}

export default App;
