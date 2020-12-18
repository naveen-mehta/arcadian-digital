import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path='/' component={Navbar} exact/>
      <Route component={Hero} />
    </Router>
  );
}

export default App;
