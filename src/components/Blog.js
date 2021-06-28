import React from 'react'
import styled from 'styled-components'
const Blog = () => {
    return (
        <BlogContainer id="Blog">
            {/* <h3>Some Heading</h3>
            <div className="boxWrap">
                <div className="img">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="cont">
                </div>
                
            </div> */}
            <h1>Blog</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quaerat autem facilis, vitae temporibus odit necessitatibus corrupti aperiam. Temporibus, maxime quae. Nisi, amet laboriosam. Beatae maiores in repellendus. Quia, vero!</p>
        </BlogContainer>
    )
}

export default Blog

// create media queries
const BlogContainer = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
width: 100%;
`