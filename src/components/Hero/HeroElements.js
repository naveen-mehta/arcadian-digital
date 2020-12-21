import styled from 'styled-components'
import HeroImage from '../../images/hero.png'
import PhoneImageOne from '../../images/phone-mockup-1.png'
import PhoneImageTwo from '../../images/phone-mockup-2.png'

export const HeroContainer = styled.div`
    background-image: url(${HeroImage});
    background-size: 100%;    
    position: relative;
    width: 102%;
    height: 619px;
    background-repeat: no-repeat;
    left: -8px;
    z-index: -555;
    margin-top: 157px;

    @media screen and (max-width: 480px) {
       background-image: none;
       left: 40%;
       width: 100%;
    }
`

export const HeroText = styled.div`
    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        color: #F6F6F6;
        font-style: normal;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin-top: 2%;

        @media screen and (max-width: 480px) {
           font-size: 24px;   
           color: #737373;
           top: 4%;
           position: absolute;
           left: 20%;
        }
        @media screen and (max-width: 400px) {
            left: 15%;
        }
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

        @media screen and (max-width: 480px) {
           font-family: 'Montserrat', sans-serif;
           font-size: 36px;   
           color: #252B42;
           font-weight: bold;
           line-height: 58px; 
           letter-spacing: 0.2px;
           top: 18%;
           left: -25%;
           width: 115%;
           position: absolute; 
           color: #252B42;
           margin: 0;
        }

        @media screen and (max-width: 400px) {
           font-size: 30px;
           line-height: 48px;   
        }
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

        @media screen and (max-width: 480px) {
           font-family: 'Montserrat', sans-serif;
           font-size: 28px;   
           color: #737373;
           font-weight: 500;
           line-height: 48px; 
           top: 48%;
           left: -21%;
           width: 108%;
           position: absolute; 
           margin: 0;
        }
        @media screen and (max-width: 400px) {
           font-size: 22px;
           line-height: 35px;
           top: 52%;   
        }
    }
`

export const PhoneMockupOne = styled.div`
    background-image: url(${PhoneImageOne});
    z-index: 1;   
    background-size: 94%;    
    background-repeat: no-repeat;  
    width: 295px;
    height: 613px;
    position: absolute;
    top: 456px;
    left: 467px;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));

    @media screen and (max-width: 480px) {
        top: 100%;
        width: 72%;
        height: 105%;
        left: -33%;
        overflow: hidden;
        background-size: 95%;
        background-position: center;
        filter: none;
    }
`

export const PhoneMockupTwo = styled.div`
    background-image: url(${PhoneImageTwo});
    background-size: 94%;    
    background-repeat: no-repeat;
    top: 250px;
    width: 302px;
    height: 613px;
    left: 710px;
    position: relative;

    @media screen and (max-width: 480px) {
        top: 112%;
        width: 65%;
        left: 30%;
        height: 100%;
        background-size: 100%;
        background-position: center;
    }
`

export const HorizontalRule = styled.div`
    position: absolute;
    width: 884px;
    left: 23%;
    top: 180%;
    border: 1px solid #E4E4E4;

    @media screen and (max-width: 480px) {
        top: 210%;
        width: 100%;
        left: -15%;
    }
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
    top: 404px;
    left: 520px;

    @media screen and (max-width: 480px) {
        top: 68%;
        width: 75%;
        height: 11%;
        left: -3%;
    }

    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.1px;
        color: #FFFFFF;

        @media screen and (max-width: 480px) {
            font-size: 32px;
        }
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
    top: 404px;
    left: 777px;

    @media screen and (max-width: 480px) {
        top: 81%;
        width: 75%;
        height: 11%;
        left: -3.5%;
        border: 1px solid #FA4A0C;
    }

    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.1px;
        color: #FFFFFF;

        @media screen and (max-width: 480px) {
            font-size: 32px;
            color: #FA4A0C;
        }
    }    
`