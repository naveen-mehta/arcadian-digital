import styled from 'styled-components'

export const FooterContainer = styled.div`
    position: absolute;
    top: 650%;
    display: flex;
    align-items: center;
    width: 60%;
    left: 20%;

    @media screen and (max-width: 480px) {
        top: 990%;
        width: 200%;
    }
`

export const FooterLogo = styled.div`

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const SocialMediaContainer = styled.div`
    display: flex;
    margin: 0 15% 0 10%;
`

export const SocialMediaLink = styled.div`
    margin: 0 10%;
`

export const Copyright = styled.div`
`