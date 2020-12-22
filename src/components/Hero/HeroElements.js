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
       width: 100%;
       left: 0;
    }
`

export const HeroContentContainer = styled.div`
    margin: 0 auto;
    width: 500px;

    @media screen and (max-width: 480px) {
       width: 100%;
       left: 0;
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
        position: relative;
        left: 0px;
        top: 75px;

        @media screen and (max-width: 480px) {
           font-size: 16px;   
           color: #737373;
           top: -155px;
        }
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 58px;
        color: #F6F6F6;
        display: flex;
        justify-content: center;
        text-align: center;
        line-height: 80px;
        position: relative;
        top: 57px;
        left: -250px;
        width: 1000px;

        @media screen and (max-width: 480px) {
           font-size: 36px;   
           color: #252B42;
           font-weight: bold;
           line-height: 43px; 
           letter-spacing: 0.2px;
           top: -152px;
           left: 5px; 
           width: 95%;
           position: relative; 
           margin: 0 auto;
        }

        @media screen and (max-width: 413px) {
           font-size: 30px;
           width: 70%;
           left: -201px;
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
        position: relative;
        top: 45px;
        left: -90px;
        width: 700px;

        @media screen and (max-width: 480px) {
           font-family: 'Montserrat', sans-serif;
           font-size: 23px;   
           color: #737373;
           line-height: 38px; 
           top: 38px;
           left: 10px;
           width: 95%;
           position: absolute; 
           margin: 0;
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
    position: relative;
    top: 50px;
    left: 0px;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));

    @media screen and (max-width: 480px) {
        width: 56%;
        top: 95px;
        height: 450px;
        left: 0;
        filter: none;
    }
    @media screen and (max-width: 413px) {
        width: 40%;
        top: 120px;
        height: 410px;
    }
`

export const PhoneMockupTwo = styled.div`
    background-image: url(${PhoneImageTwo});
    background-size: 94%;    
    background-repeat: no-repeat;
    top: -455px;
    width: 302px;
    height: 613px;
    left: 240px;
    position: relative;

    @media screen and (max-width: 480px) {
        width: 58%;
        top: -270px;
        height: 410px;
        left: 180px;
    }
    @media screen and (max-width: 413px) {
        width: 38%;
        top: -215px;
        left: 45px;
    }
`

export const HorizontalRule = styled.div`
    position: relative;
    width: 884px;
    left: -190px;
    top: -410px;
    border: 1px solid #E4E4E4;

    @media screen and (max-width: 480px) {
        top: -80px;
        width: 100%;
        left: 4px;
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
    position: relative;
    top: 68px;
    left: 50px;

    @media screen and (max-width: 480px) {
        margin: 0 auto;
        left: 80px;
        top: 0px;   
    }

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
    position: relative;
    top: 68px;
    left: 70px;

    @media screen and (max-width: 480px) {
        border: 1px solid #FA4A0C;
        left: -157px;
        margin-top: 15px;
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
            color: #FA4A0C;
        }
    }    
`