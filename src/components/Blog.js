import React from 'react'
import styled from 'styled-components'
const Blog = () => {
    return (
        <BlogContainer>
            {/* <h3>Some Heading</h3>
            <div className="boxWrap">
                <div className="img">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="cont">
                </div>
                
            </div> */}
            <h1>Blog</h1>
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
border: 1px solid indigo;

`