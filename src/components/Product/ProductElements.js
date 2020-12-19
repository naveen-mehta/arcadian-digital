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
    top: 170%;
    left: 35%;
`

export const CreateAccountContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;    
`

export const CreateAccountText = styled.div`
    position: absolute;
    top: 220%;
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
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 40px; 
        color: #252B42;
        line-height: 57px;
        font-weight: bold;
        letter-spacing: 0.2px;
    }
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 24px; 
        color: #737373;
        line-height: 38px;
        font-weight: 500;
        letter-spacing: 0.2px;
    }

`
export const PhoneMockupThree = styled.div`
    background-image: url(${PhoneImageThree});
    z-index: 1;   
    background-size: 100%;    
    background-repeat: no-repeat;  
    width: 50%;
    height: 125%;
    margin-left: 6%;
    position: absolute;
    top: 180%;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));
`

export const ExploreVarietiesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;  
`

export const ExploreVarietiesText = styled.div`
    position: absolute;
    top: 325%;
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
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 40px; 
        color: #252B42;
        line-height: 57px;
        font-weight: bold;
        letter-spacing: 0.2px;
    }
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 24px; 
        color: #737373;
        line-height: 38px;
        font-weight: 500;
        letter-spacing: 0.2px;
    }
`
export const PhoneMockupFour = styled.div`
    background-image: url(${PhoneImageFour});
    z-index: 1;   
    background-size: 100%;    
    background-repeat: no-repeat;  
    width: 50%;
    height: 125%;
    left: 51%;
    position: absolute;
    top: 285%;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));
`

export const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;    
`

export const CheckoutText = styled.div`
    position: absolute;
    top: 425%;
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
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 40px; 
        color: #252B42;
        line-height: 57px;
        font-weight: bold;
        letter-spacing: 0.2px;
    }
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 24px; 
        color: #737373;
        line-height: 38px;
        font-weight: 500;
        letter-spacing: 0.2px;
    }

`
export const PhoneMockupFive = styled.div`
    background-image: url(${PhoneImageFive});
    z-index: 1;   
    background-size: 100%;    
    background-repeat: no-repeat;  
    width: 50%;
    height: 125%;
    margin-left: 6%;
    position: absolute;
    top: 385%;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));
`

