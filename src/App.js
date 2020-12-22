import React from 'react'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import Hero from './components/Hero'
import ProductOverview from './components/Product'
import Download from './components/Download'
import Footer from './components/Footer'
import { useState } from 'react'

// function App() {
//   return (
//     <Router>
//       <Route path='/' component={Navbar} exact/>
//       <Route path='/' component={Drawer} exact/>
//       <Route component={Hero} />
//       <Route component={ProductOverview} />
//       <Route component={Download} />
//       <Route component={Footer} />
//     </Router>
//   );
// }

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <Drawer isOpen={isOpen} toggle={toggle}/>
      <Hero />
      <ProductOverview />
      <Download />
    </div>
  );
}

export default App;
