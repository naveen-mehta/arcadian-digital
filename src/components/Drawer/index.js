import React from 'react'
import { 
    DrawerContainer, 
    DrawerCloseContainer, 
    DrawerCloseIcon,
    DrawerWrapper,
    DrawerOptions,
    DrawerLink,
 } from './DrawerElements'
import { useState } from 'react'

const Drawer = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    } 

    return (
        <DrawerContainer isOpen={isOpen} onClick={toggle}>
            <DrawerCloseContainer onClick={toggle}>
                <DrawerCloseIcon >
                </DrawerCloseIcon>
            </DrawerCloseContainer>
            <DrawerWrapper>    
                <DrawerOptions>
                    <DrawerLink to="home" onClick={toggle}>Home</DrawerLink>
                    <DrawerLink to="product" onClick={toggle}>Product</DrawerLink>
                    <DrawerLink to="faq" onClick={toggle}>Faq</DrawerLink>
                    <DrawerLink to="contact" onClick={toggle}>Contact</DrawerLink>
                </DrawerOptions>
            </DrawerWrapper>
        </DrawerContainer> 
    )
}

export default Drawer;