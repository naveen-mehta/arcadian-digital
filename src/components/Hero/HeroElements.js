import styled from 'styled-components'
import HeroImage from '../../images/hero.png'
import PhoneImageOne from '../../images/phone-mockup-1.png'
import PhoneImageTwo from '../../images/phone-mockup-2.png'

export const HeroContainer = styled.div`
    background-image: url(${HeroImage});
    background-size: 100%;    
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    left: 0px;
`

export const HeroText = styled.div`
    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        color: #F6F6F6;
        display: flex;
        justify-content: center;
    }
    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 58px;
        color: #F6F6F6;
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 0 20%;
        line-height: 80px;
    }
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        color: #F6F6F6;
        display: flex;
        justify-content: center;
    }
`
export const PhoneMockupOne = styled.div`
    background-image: url(${PhoneImageOne});
    z-index: 1;   
    background-size: 100%;    
    background-repeat: no-repeat;  
    width: 32%;
    height: 100%;
    margin-left: 29.5%;
    position: relative;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));
`
export const PhoneMockupTwo = styled.div`
    background-image: url(${PhoneImageTwo});
    background-size: 50%;    
    background-repeat: no-repeat;
    top: -75%;
    width: 30%;
    height: 100%;
    left: 49%;
    position: relative;
`

