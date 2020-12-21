import styled from 'styled-components'
import PhoneImageThree from '../../images/phone-mockup-3.png'
import PhoneImageFour from '../../images/phone-mockup-4.png'
import PhoneImageFive from '../../images/phone-mockup-5.png'

export const ProductHeadline = styled.div`
    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 44px;
        color: #000000;
        letter-spacing: 0.1px;
        opacity: 0.8;
    }
    position: absolute;
    top: 1407px;
    left: 495px;

    @media screen and (max-width: 480px) {
        top: 240%;
        width: 100%; 
        left: 30%;

        h1 {
            font-size: 36px;
            letter-spacing: 0.2px;
            opacity: 0.8;
        }
    }
    @media screen and (max-width: 400px) {
        h1 {
            font-size: 28px;
        }
        top: 247%;
    }
`

export const CreateAccountContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;    
`

export const CreateAccountText = styled.div`
    position: absolute;
    top: 1756px;
    left: 720px;
    

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px; 
        font-style: normal;
        color: #FA4A0C;
        line-height: 36px;
        font-weight: bold;
        letter-spacing: 0.1px;

        @media screen and (max-width: 480px) {
            font-size: 35px;
            width: 220%;
            position: absolute;
            left: -46%;
        }
        @media screen and (max-width: 400px) {
            font-size: 27px;
        }
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 40px; 
        color: #252B42;
        line-height: 57px;
        font-weight: bold;
        letter-spacing: 0.2px;
        margin-top: -9px;

        @media screen and (max-width: 480px) {
            font-size: 55px;
            width: 300%;
            position: absolute;
            left: -93%;
            margin-top: 80%;
            text-align: center;
            line-height: 75px;
        }
        @media screen and (max-width: 400px) {
            font-size: 40px;
            left: -98%;
            width: 290%;
            line-height: 57px;
        }
    }
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 24px; 
        color: #737373;
        line-height: 38px;
        font-weight: 500;
        letter-spacing: 0.2px;

        @media screen and (max-width: 480px) {
            font-size: 35px;
            width: 200%;
            margin-top: 270%;
            position: absolute;
            left: -48%;
            text-align: center;
            line-height: 55px;
        }
        @media screen and (max-width: 400px) {
            font-size: 27px;
        }
    }
`
export const PhoneMockupThree = styled.div`
    background-image: url(${PhoneImageThree});
    z-index: 1;   
    background-size: 100%;    
    background-repeat: no-repeat;  
    width: 410px;
    height: 570px;
    left: 188px;
    position: absolute;
    top: 1602px;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));

    @media screen and (max-width: 480px) {
        width: 110%;
        top: 370%;
        left: 3%;
        height: 110%;  
        background-size: 110%;
        background-position: center;    
    }
`

export const ExploreVarietiesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;  
`

export const ExploreVarietiesText = styled.div`
    position: absolute;
    top: 372%;
    left: 16%;
    width: 40%;

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px; 
        font-style: normal;
        color: #FA4A0C;
        line-height: 36px;
        font-weight: bold;
        letter-spacing: 0.1px;

        @media screen and (max-width: 480px) {
            font-size: 35px;
            width: 200%;
            position: absolute;
            left: 49%;
            margin-top: 500%;
        }
        @media screen and (max-width: 400px) {
            font-size: 27px;
        }
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 40px; 
        color: #252B42;
        line-height: 57px;
        font-weight: bold;
        letter-spacing: 0.2px;

        @media screen and (max-width: 480px) {
            font-size: 55px;
            width: 280%;
            position: absolute;
            left: 0%;
            margin-top: 570%;
            text-align: center;
            line-height: 75px;
        }
        @media screen and (max-width: 400px) {
            font-size: 40px;
            line-height: 57px;
        }
    }
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 24px; 
        color: #737373;
        line-height: 38px;
        font-weight: 500;
        letter-spacing: 0.2px;

        @media screen and (max-width: 480px) {
            font-size: 35px;
            width: 200%;
            position: absolute;
            margin-top: 720%;
            left: 35%;
            text-align: center;
            line-height: 55px;
        }
        @media screen and (max-width: 400px) {
            font-size: 27px;
            line-height: 38px;
            margin-top: 790%;
        }
    }
`

export const PhoneMockupFour = styled.div`
    background-image: url(${PhoneImageFour});
    z-index: 1;   
    background-size: 100%;    
    background-repeat: no-repeat;  
    width: 30%;
    height: 90%;
    left: 58%;
    position: absolute;
    top: 349%;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));

    @media screen and (max-width: 480px) {
        width: 110%;
        top: 580%;
        left: 15%;
        height: 107%; 
        background-size: 110%;
        background-position: center;      
    }
`

export const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;    
`

export const CheckoutText = styled.div`
    position: absolute;
    top: 480%;
    left: 51%;
    width: 40%;

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px; 
        font-style: normal;
        color: #FA4A0C;
        line-height: 36px;
        font-weight: bold;
        letter-spacing: 0.1px;

        @media screen and (max-width: 480px) {
            font-size: 35px;
            width: 200%;
            position: absolute;
            left: -10%;
            margin-top: 960%;
        }
        @media screen and (max-width: 400px) {
            font-size: 27px;
        }
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 40px; 
        color: #252B42;
        line-height: 57px;
        font-weight: bold;
        letter-spacing: 0.2px;

        @media screen and (max-width: 480px) {
            font-size: 55px;
            width: 280%;
            position: absolute;
            left: -90%;
            margin-top: 1020%;
            text-align: center;
            line-height: 75px;
        }
        @media screen and (max-width: 400px) {
            font-size: 40px;
            line-height: 57px;
        }
    }
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 24px; 
        color: #737373;
        line-height: 38px;
        font-weight: 500;
        letter-spacing: 0.2px;

        @media screen and (max-width: 480px) {
            font-size: 35px;
            width: 200%;
            position: absolute;
            margin-top: 1170%;
            left: -55%;
            text-align: center;
            line-height: 55px;
        }
        @media screen and (max-width: 400px) {
            font-size: 27px;
            line-height: 38px;
        }
    }

`

export const PhoneMockupFive = styled.div`
    background-image: url(${PhoneImageFive});
    z-index: 1;   
    background-size: 100%;    
    background-repeat: no-repeat;  
    width: 30%;
    height: 90%;
    margin-left: 13%;
    position: absolute;
    top: 457%;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));

    @media screen and (max-width: 480px) {
        width: 120%;
        top: 800%;
        height: 110%;
        left: -4%;    
        background-size: 110%;
        background-position: center;     
    }
`

