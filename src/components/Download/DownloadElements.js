import styled from 'styled-components'
import DownloadImage from '../../images/download.png'

export const DownloadContainer = styled.div`
    background-image: url(${DownloadImage});
    background-size: 100%;    
    position: absolute;
    top: 570%;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    left: 0px;

    @media screen and (max-width: 480px) {
        background-image: none;
        background-color: #252B42;
        top: 870%;
        width: 200%;
    }
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
        margin: 7% 20% 0 20%;
        line-height: 57px;
    }
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        color: #F6F6F6;
        display: flex;
        justify-content: center;
    }
`

export const DownloadBtnContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const DownloadPlaystoreBtn = styled.button`
    background: #FA4A0C;
    box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.2);
    border-radius: 10px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-left: 80%;
    width: 142px;
    height: 64px;
    justify-content: center;
    border: none;

    @media screen and (max-width: 480px) {
        margin-left: 40%;
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
    margin-left: 3%;
    width: 173px;
    height: 60px;
    justify-content: center;

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