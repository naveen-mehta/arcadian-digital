import React from 'react'
import { Nav, NavLogo, NavMenu, NavLink } from './NavbarElements'
import logo from '../../images/logo.svg'

const Navbar = () => {

    return (
        <div>
            <Nav>
                <NavLogo to="/">
                    <img src={logo} alt=""/>
                </NavLogo>
                <NavMenu>
                    <NavLink 
                        to="home"   
                        offset={-190}      
                        smooth={true}
                        duration={650}
                        spy={true}
                        exact='true'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="product"
                        offset={450}
                        smooth={true}
                        duration={650}
                        spy={true}
                        exact='true'
                    >
                        Product
                    </NavLink>
                    <NavLink
                        to="faq"
                        offset={-140}
                        smooth={true}
                        duration={650}
                        spy={true}
                        exact='true'
                    >
                        Faq
                    </NavLink>
                    <NavLink
                        to="contact"
                        offset={-270}
                        smooth={true}
                        duration={650}
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