import React from 'react'
import styled from 'styled-components'
const Skills = () => {
    return (
        <SkillsContainer>
            {/* <h3>Some Heading</h3>
            <div className="boxWrap">
                <div className="img">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="cont">
                </div>
                
            </div> */}
            <h1>skills</h1>
        </SkillsContainer>
    )
}

export default Skills

// create media queries
const SkillsContainer = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
width: 100%;
border: 1px solid pink;

`