import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom' 
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 156px;
    display: flex;
    align-items: center; 
    justify-content: flex-end;
    background-color: white;

    @media screen and (max-width: 480px) {
        position: sticky;
        z-index: -555;
    }
`

export const NavLogo = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
    position: fixed;
    width: 246px;
    height: 101.76px;
    left: 40px;

    @media screen and (max-width: 480px) {
        width: 104px;
        height: 51px;
        top: 3%;
        z-index: -55;
        position: absolute;
        left: 9%;
    }
`

export const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    position: fixed;
    width: 605px;
    height: 48px;
    right: 45px;

    @media screen and (max-width: 480px) {
        display: none;
    }

`
export const NavLink = styled(LinkScroll)`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px; 
    color: #252B42;
    cursor: pointer;
    margin: 0 57px;

    &.active {
        color: black;
        display: inline-block;
        border-bottom: none;
        color: #FA4A0C;       
    }

    &:hover { 
        box-shadow: none;
        color: #FA4A0C;    
    }
`
