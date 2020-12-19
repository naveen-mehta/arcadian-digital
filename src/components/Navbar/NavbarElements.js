import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom' 

export const Nav = styled.nav`
    height: 156px;
    display: flex;
    align-items: center; 
    justify-content: flex-end;

`

export const NavLogo = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;

    position: absolute;
    width: 246px;
    height: 101.76px;
    left: 70px;

    @media screen and (max-width: 480px) {
        width: 104px;
        height: 51px;
        top: 3%;
    }

`
export const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 580px;
    height: 48px;
    right: 40px;

    @media screen and (max-width: 480px) {
        display: none;
    }

`
export const NavLink = styled.div`
    padding-left: 94px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px; 
    color: #252B42;
`
