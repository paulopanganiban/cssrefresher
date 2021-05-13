import React from 'react'
import styled from 'styled-components'
import HeroImg from '../images/hero.png'
import {media} from '../data'
const Content = () => {
    return (
        <ContentWrap>
            {/* <h3>Some Heading</h3>
            <div className="boxWrap">
                <div className="img">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="cont">
                </div>
            </div> */}
        </ContentWrap>
    )
}

export default Content

// create media queries
const ContentWrap = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
width: 100%;
border: 1px solid green;

`