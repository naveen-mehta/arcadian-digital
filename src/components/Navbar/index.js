import React from 'react'
import { Nav, NavLogo, NavMenu, NavLink } from './NavbarElements'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLogo to="/">
                    <img src="" alt=""/>
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