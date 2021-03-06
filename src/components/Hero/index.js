import React from 'react'
import { 
    HeroContainer, 
    HeroText, 
    PhoneMockupOne, 
    PhoneMockupTwo, 
    HorizontalRule, 
    PlaystoreBtn, 
    AppstoreBtn, 
    BtnContainer,
    HeroContentContainer
} from './HeroElements'

const Hero = () => {
    return (
        <div>
            <HeroContainer id="home">          
                <HeroContentContainer>
                    <HeroText>
                        <h3>Food app</h3>
                        <h1>Why stay hungry when you can order from Bella Onojie</h1>
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
                </HeroContentContainer>
            </HeroContainer>     
        </div>
    )
}

export default Hero
