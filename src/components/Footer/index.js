import React from 'react'
import { 
    FooterContainer, 
    FooterLogo, 
    SocialMediaContainer, 
    SocialMediaLink, 
    Copyright 
} from './FooterElements'
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
                <SocialMediaContainer>
                    <SocialMediaLink>
                        <img src={Twitter} alt=""/>
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <img src={Facebook} alt=""/>
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <img src={Instagram} alt=""/>
                    </SocialMediaLink>
                </SocialMediaContainer>
                <Copyright>
                    Copyright 2020 Bella Onojie.com
                </Copyright>
            </FooterContainer>
        </div>       
    )
}

export default Footer