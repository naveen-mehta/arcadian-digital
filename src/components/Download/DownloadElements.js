import styled from 'styled-components'
import DownloadImage from '../../images/download.png'

export const DownloadContainer = styled.div`
    background-image: url(${DownloadImage});
    background-size: 100%;    
    position: absolute;
    top: 520%;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    left: 0px;
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