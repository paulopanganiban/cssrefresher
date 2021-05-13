import React from 'react'
import styled from 'styled-components'
const About = () => {
    return (
        <AboutContainer>
            {/* <h3>Some Heading</h3>
            <div className="boxWrap">
                <div className="img">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="cont">
                </div>
                
            </div> */}
            <h1>About</h1>
        </AboutContainer>
    )
}

export default About

// create media queries
const AboutContainer = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
width: 100%;
border: 1px solid yellow;

`