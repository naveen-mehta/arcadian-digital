import styled from 'styled-components'
import DownloadImage from '../../images/download.png'

export const DownloadContainer = styled.div`
    background-image: url(${DownloadImage});
    background-size: 100%;    
    position: relative;
    top: 1050px;
    width: 100%;
    height: 510px;
    background-repeat: no-repeat;
    left: 0px;

    @media screen and (max-width: 480px) {
        background-image: none;
        background-color: #252B42;
        top: 940%;
        width: 140vw;
    }
`

export const DownloadContentContainer = styled.div`
    margin: 0 auto;
    width: 800px;
`

export const DownloadText = styled.div`
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
        font-style: normal;
        font-weight: bold;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        text-align: center;
        letter-spacing: 0.2px;
        line-height: 57px;
        position: relative;
        top: 136px;
        left: 5px;

        @media screen and (max-width: 480px) {
            margin-top: 25%;
        }
        @media screen and (max-width: 400px) {
            font-size: 32px;
        }
    }
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        color: #F6F6F6;
        display: flex;
        justify-content: center;
        position: relative;
        top: 128px;
        left: -11px;
        width: 850px;

        @media screen and (max-width: 480px) {
            width: 60%;
            margin-left: 20%;
            line-height: 43px;
            text-align: center;
        }
        @media screen and (max-width: 400px) {
            font-size: 22px;
            line-height: 38px;
        }
    }
`

export const DownloadBtnContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    top: 160px;
    left: -336px;

    @media screen and (max-width: 480px) {
        width: 80%;
        margin: 17% 10%;
    }
    @media screen and (max-width: 400px) {
        margin: 0 6%;
    }
`

export const DownloadPlaystoreBtn = styled.button`
    background: #FA4A0C;
    box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.2);
    border-radius: 10px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 142px;
    height: 64px;
    justify-content: center;
    border: none;
    position: relative;
    left: 577px;

    @media screen and (max-width: 480px) {
        margin-left: 20%;
    }

    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.2px;
        color: #FFFFFF;
    }    
`

export const DownloadAppstoreBtn = styled.button`
    background: transparent;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 173px;
    height: 60px;
    justify-content: center;
    position: relative;
    left: 335px;
    top: 3px;

    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.2px;
        color: #FFFFFF;
    }    
`