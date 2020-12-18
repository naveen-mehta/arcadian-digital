import React from 'react'
import HeroImage from '../../images/hero.png'
import { HeroContainer } from './HeroElements'

const Hero = () => {
    return (
        <div>
            <HeroContainer>
                <img src={HeroImage} alt=""/>
            </HeroContainer>
        </div>
    )
}

export default Hero
