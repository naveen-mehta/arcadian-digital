import React from 'react'
import { FooterContainer, FooterLogo, SocialMediaIcons, Copyright } from './FooterElements'
import logo from '../../images/logo.svg'
import Twitter from '../../images/twitter.png'
import Facebook from '../../images/facebook.png'
import Instagram from '../../images/instagram.png'

const Footer = () => {
    return (
        <div>
            <FooterContainer>            
                <FooterLogo to="/">
                    <img src={logo} alt=""/>
                </FooterLogo>
                <SocialMediaIcons>
                    <img src={Twitter} alt=""/>
                    <img src={Facebook} alt=""/>
                    <img src={Instagram} alt=""/>
                </SocialMediaIcons>
                <Copyright>
                    Copyright 2020 Bella Onojie.com
                </Copyright>
            </FooterContainer>
        </div>       
    )
}

export default Footer