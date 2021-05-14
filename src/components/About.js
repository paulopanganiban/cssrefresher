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
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eum autem quibusdam recusandae sed saepe, quaerat nisi a excepturi eligendi cupiditate aspernatur nobis quidem est harum quis perspiciatis magnam eaque.</h2>
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