import styled from 'styled-components'
import HeroImage from '../../images/hero.png'

export const HeroContainer = styled.div`
    background-image: url(${HeroImage});
    background-size: 100%;    
    position: absolute;
    width: 100%;
    height: 75%;
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

