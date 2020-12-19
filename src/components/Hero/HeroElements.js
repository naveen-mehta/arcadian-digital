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
        font-family: 'Poppins', sans-serif;
        font-size: 58px;
        color: #F6F6F6;
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 0 15%;
        line-height: 80px;
    }
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        line-height: 38px;
        font-style: normal;
        font-weight: 500;
        color: #F6F6F6;
        display: flex;
        letter-spacing: 0.2px;
        text-align: center;
        justify-content: center;
    }
`

export const PhoneMockupOne = styled.div`
    background-image: url(${PhoneImageOne});
    z-index: 1;   
    background-size: 100%;    
    background-repeat: no-repeat;  
    width: 45%;
    height: 150%;
    position: absolute;
    top: 45%;
    left: 20%;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));
`

export const PhoneMockupTwo = styled.div`
    background-image: url(${PhoneImageTwo});
    background-size: 50%;    
    background-repeat: no-repeat;
    top: 30%;
    width: 42%;
    height: 100%;
    left: 47.5%;
    position: relative;
`

export const HorizontalRule = styled.div`
    position: absolute;
    width: 884px;
    left: 278px;
    top: 180%;
    border: 1px solid #E4E4E4;
`

export const BtnContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const PlaystoreBtn = styled.button`
    background: #FA4A0C;
    box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.2);
    border-radius: 30px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 236px;
    height: 68px;
    justify-content: center;
    border: none;
    position: absolute;
    top: 50%;
    left: 35%;

    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.1px;
        color: #FFFFFF;
    }    
`

export const AppstoreBtn = styled.button`
    background: transparent;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 30px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-left: 1%;
    width: 236px;
    height: 68px;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 52%;

    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.1px;
        color: #FFFFFF;
    }    
`