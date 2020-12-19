import React from 'react'
import { 
    HeroContainer, 
    HeroText, 
    PhoneMockupOne, 
    PhoneMockupTwo, 
    HorizontalRule, 
    PlaystoreBtn, 
    AppstoreBtn, 
    BtnContainer
} from './HeroElements'

const Hero = () => {
    return (
        <div>
            <HeroContainer>          
                <HeroText>
                    <h3>Food app</h3>
                    <h1>Why stay hungry when</h1>
                    <h1>you can order form Bella Onojie</h1>
                    <h4>Download the bella onoje’s food app now on</h4>
                </HeroText>
                <BtnContainer>
                    <PlaystoreBtn>
                        <h3>Playstore</h3>
                    </PlaystoreBtn>
                    <AppstoreBtn>
                        <h3>App store</h3>
                    </AppstoreBtn>
                </BtnContainer>
                <PhoneMockupOne />
                <PhoneMockupTwo />
                <HorizontalRule />
            </HeroContainer>     
        </div>
    )
}

export default Hero
