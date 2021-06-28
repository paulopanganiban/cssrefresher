import React from 'react'
import styled from 'styled-components'
import img from '../images/oro.png'
import { media } from '../data'
import { Link as LinkS} from 'react-scroll'
const Hero = ({toggle}) => {
    return (
        <HeroContainer id="Home">
            <HeroImage src={img}>
                <HeroInfo>
                    <HeroName>
                        John Paulo Panganiban
                        </HeroName>
                    <HeroTitle>
                        Front-end Developer and Graphic Designer
                        </HeroTitle>
                    <HeroSubtitle>
                       

                        </HeroSubtitle>
                        <HeroLinks>
                        <HeroLink    duration={500}
                        smooth={true}
                        to="Projects"
                        spy={true}
                        offset={-125}
                        activeClass="active">
                            View Projects
                        </HeroLink>
                        <span>{` ` }or {` `}</span>
                        <HeroLink
                        duration={500}
                        smooth={true}
                        to="About"
                        offset={125}
                        activeClass="active">
                            Read About Me
                        </HeroLink>
                        </HeroLinks>
                </HeroInfo>
            </HeroImage>
        </HeroContainer>


    )
}

export default Hero
const HeroLink = styled(LinkS)`
font-weight: 700;
font-size: 18px;
:hover {
    cursor: pointer;
}
`
const HeroLinks = styled.div`

`
const HeroImage = styled.div`
display: flex;
 width:100%;
 height: 100%;
/* height: 100%;  */
/* position: relative; */
background-image: url(${img});
background-repeat:no-repeat;
background-size: cover;
/* background-size: 90%; */
/* background-size:contain; */
/* background-position:center; */
${media.phone} {

}
`
const HeroSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: auto;
margin-right: auto;
`
const HeroSubtitle = styled.p`
color: #292929;

`
const HeroTitle = styled.h1`
font-weight: 1000;
line-height: 2.25rem;
`
const HeroName = styled.h6`
font-size: 20px;
font-weight: 100;
color: #292929;
`
const HeroInfo = styled.div`
margin-top: auto;
margin-left: 14px;
margin-bottom: 10px;
`
const HeroContainer = styled.div`
margin-top: 125px;
display: flex;
height: 500px;
justify-content: center;
${media.phone} {

}
`
