import React from 'react'
import styled from 'styled-components'
import img from '../images/herojpg.jpg'
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
margin: 10px;
height: 500px;
/* responsive images */
max-width: 100%;
height: auto;
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