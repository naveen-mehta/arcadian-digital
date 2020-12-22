import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'

export const DrawerContainer = styled.aside`
    z-index: 1;
    width: 100%;
    height: 1000px;
    display: grid;
    background: white;
    justify-content: center;
    position: fixed;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    transition: all 0.5s ease-in-out;
`;

export const DrawerCloseContainer = styled.div`
    position: absolute;
    top: 50px;
    right: 45px;
`;

export const DrawerCloseIcon = styled(FaTimes)`
    color: grey;
`; 

export const DrawerWrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(14, 70px);
    text-align: center;
    margin-right: 40px;
    padding-top: 100px;
    transition: all 0.4s ease-in-out;
    justify-content: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(14, 50px);
        transition: all 0.3s ease-in-out;
    }
`

export const DrawerOptions = styled.div`
    transition: all 0.3s ease-in-out;
`

export const DrawerLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 32px; 
    color: #252B42;
    list-style: none;
    padding: 30px; 
    justify-content: center;
    border-bottom: 2px solid #FA4A0C;
    
    &:hover {
        color: black;
        transition: 0.3 ease-in-out;
    }
`