import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import aboutMe from './pages/aboutMe';
import diet from './pages/diet';
import contact from './pages/contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
