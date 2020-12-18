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
                    <NavLink>
                        Home
                    </NavLink>
                    <NavLink>
                        Product
                    </NavLink>
                    <NavLink>
                        Faq
                    </NavLink>
                    <NavLink>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>       
    )
}

export default Navbar