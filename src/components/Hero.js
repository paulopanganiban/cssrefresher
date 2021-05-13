import React from 'react'
import styled from 'styled-components'
import img from '../images/herojpg.jpg'
const Hero = () => {
    return (
      <HeroContainer>
          {/* <h1>bg image</h1> */}
          <HeroInfo>
            <HeroName>
                John Paulo Panganiban
            </HeroName>
            <HeroTitle>
                Front-end Developer
            </HeroTitle>
            <HeroSubtitle>
                I love working out and coding.
            </HeroSubtitle>
            <HeroLink>
                View Projects or Read About Me
            </HeroLink>
          </HeroInfo>
      </HeroContainer>
    )
}

export default Hero
const HeroLink = styled.p`

`
const HeroLinks = styled.div`

`
const HeroSubtitle = styled.h5``
const HeroTitle = styled.h1`
font-weight: 1000;
`
const HeroName = styled.h4`

`
const HeroInfo = styled.div`
margin-top: auto;
margin-right: auto;
margin-left: 8px;
margin-bottom: 5px;
`
const HeroContainer = styled.div`
height: 500px;
display: flex;
justify-content: center;
border: 1px solid red;
`
