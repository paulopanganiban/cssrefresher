import React from 'react'
import styled from 'styled-components'
const About = () => {
    return (
        <AboutContainer id="About">
            {/* <h3>Some Heading</h3>
            <div className="boxWrap">
                <div className="img">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="cont">
                </div>
                
            </div> */}
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis pariatur quas, alias dolorum voluptates perspiciatis rem consequatur, ipsum veritatis ratione totam quasi nulla debitis, dicta voluptas officiis a optio sunt.</p>
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
`