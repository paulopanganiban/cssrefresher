import React from 'react'
import styled from 'styled-components'
import img from '../images/hero.jpg'
const Hero = () => {
    return (
        <HeroWrapper>
            <div class="hero-image">
                <div class="hero-text">
                    <h1>I am John Doe</h1>
                    <p>And I'm a Photographer</p>
                    <button>Hire me</button>
                </div>
            </div>
        </HeroWrapper>
    )
}

export default Hero

const HeroWrapper = styled.div`
height: 500px;
width: 100%;
overflow: hidden;
position: relative;
background: url(${img}) no-repeat center;
background-size: cover;
> .hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    height: 100%;
    width: 100%;
}
> .hero-image > .hero-text {
    color: white;
}
`