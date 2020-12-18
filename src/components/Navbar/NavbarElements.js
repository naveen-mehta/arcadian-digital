import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom' 

export const Nav = styled.nav`
    height: 156px;
    background: grey;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NavLogo = styled(Link)`

`
export const NavMenu = styled.div`
    display: flex;
    margin-right: 50px;
`
export const NavLink = styled.div`
    padding-left: 94px;
`
