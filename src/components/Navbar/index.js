import React from 'react'
import { Nav, NavLogo, NavMenu, NavLink } from './NavbarElements'
import logo from '../../images/logo.svg'

const Navbar = () => {

    return (
        <div>
            <Nav >
                <NavLogo to="/">
                    <img src={logo} alt=""/>
                </NavLogo>
                <NavMenu>
                    <NavLink 
                        to="home"
                        
                        smooth={true}
                        duration={550}
                        spy={true}
                        exact='true'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="product"
                        
                        smooth={true}
                        duration={550}
                        spy={true}
                        exact='true'
                    >
                        Product
                    </NavLink>
                    <NavLink
                        to="faq"
                        
                        smooth={true}
                        duration={550}
                        spy={true}
                        exact='true'
                    >
                        Faq
                    </NavLink>
                    <NavLink
                        to="contact"
                        
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