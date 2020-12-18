import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path='/' component={Navbar} exact/>
    </Router>
  );
}

export default App;
