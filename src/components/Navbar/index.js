import React from 'react'
import { Nav, NavLogo, NavMenu, NavLink } from './NavbarElements'
import logo from '../../images/logo.svg'
import { useState, useEffect } from 'react'

const Navbar = () => {
    
    const [navScroll, setNavScroll] = useState(false);

    const handleNavUpdate = () => {
      if (window.scrollY >= 70) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleNavUpdate);
    }, []);
    
    return (
        <div>
            <Nav navScroll={navScroll}>
                <NavLogo to="/">
                    <img src={logo} alt=""/>
                </NavLogo>
                <NavMenu>
                    <NavLink 
                        to="home"
                        offset={-70}
                        smooth={true}
                        duration={550}
                        spy={true}
                        exact='true'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="product"
                        offset={-70}
                        smooth={true}
                        duration={550}
                        spy={true}
                        exact='true'
                    >
                        Product
                    </NavLink>
                    <NavLink
                        to="faq"
                        offset={-70}
                        smooth={true}
                        duration={550}
                        spy={true}
                        exact='true'
                    >
                        Faq
                    </NavLink>
                    <NavLink
                        to="contact"
                        offset={-70}
                        smooth={true}
                        duration={550}
                        spy={true}
                        exact='true'
                    >
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>       
    )
}

export default Navbar