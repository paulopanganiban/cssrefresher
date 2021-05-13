import React from 'react'
import styled from 'styled-components'

const Content = () => {
    return (
        <ContentContainer>
    
            <h1>projects</h1>
        </ContentContainer>
    )
}

export default Content

// create media queries
const ContentContainer = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
width: 100%;
border: 1px solid green;
`