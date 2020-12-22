import styled from 'styled-components'

export const FooterOuterContainer = styled.div`
    margin: 0 auto;
    width: 1000px;

    @media screen and (max-width: 480px) {
        margin-top: 790px;
        text-align: center;
        width: 250px;
        padding-right: 23px;    
    }
`

export const FooterInnerContainer = styled.div`
    position: relative;
    top: 1100px;
    display: flex;
    align-items: center;
    width: 1090px;
    left: 0px;

    @media screen and (max-width: 480px) {
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;    
    }
`

export const FooterLogo = styled.div`

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const SocialMediaContainer = styled.div`
    display: flex;
    margin: 0 0 0 19%;

    @media screen and (max-width: 480px) {
        margin-left: 0;
    }
`

export const SocialMediaLink = styled.div`
    margin: 0 10%;
`

export const Copyright = styled.div`
    margin-left: 32%;
    color: #5C5C5C;
    font-size: 13px;

    @media screen and (max-width: 480px) {
        margin: 5%;
        text-align: center;
    }
`