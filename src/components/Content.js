import React from 'react'
import styled from 'styled-components'

const Content = () => {
    return (
        <ContentContainer id="Projects">
            <h1>My Projects</h1>
            <ContentWrapper>
                <ProjectCard>

                </ProjectCard>

                <ProjectCard>

                </ProjectCard>

                <ProjectCard>

                </ProjectCard>

                <ProjectCard>

                </ProjectCard>

                <ProjectCard>

                </ProjectCard>
            </ContentWrapper>
        </ContentContainer>
    )
}

export default Content
const ProjectCard = styled.div`
background-color: skyblue;
width: 350px;
height: 350px;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 10px;
`
// create media queries
const ContentWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`
const ContentContainer = styled.div`
display: flex;
flex-direction:column;
width: 100%;
> h1 {
    
    margin-left: 12px;
    margin-bottom: 12px;
}
`