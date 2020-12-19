import React from 'react'
import { 
    DownloadAppstoreBtn, 
    DownloadContainer, 
    DownloadPlaystoreBtn, 
    DownloadText,
    DownloadBtnContainer 
} from './DownloadElements'

const Download = () => {
    return (
        <div>
            <DownloadContainer>          
                <DownloadText>
                    <h2>Download the app now.</h2>
                    <h4>Available on your favorite store. Start your premium experience now</h4>
                </DownloadText>
                <DownloadBtnContainer>
                    <DownloadPlaystoreBtn>
                        <h3>Playstore</h3>
                    </DownloadPlaystoreBtn>
                    <DownloadAppstoreBtn>
                        <h3>App store</h3>
                    </DownloadAppstoreBtn>
                </DownloadBtnContainer>
            </DownloadContainer>     
        </div>
    )
}

export default Download