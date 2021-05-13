import React from 'react'
import styled from 'styled-components'
import HeroImg from '../images/hero.png'
import {media} from '../data'
const Content = () => {
    return (
        <ContentWrap>
            <h3>Some Heading</h3>
            <div className="boxWrap">
                <div className="img">
                    {/* <img src={HeroImg} alt="" /> */}
                </div>
                <div className="cont">
                </div>
            </div>
        </ContentWrap>
    )
}

export default Content

// create media queries
const ContentWrap = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
width: 100%;
border: 1px solid green;
> h3 {
    font-size: 20px;
    font-weight: bold;
    color: gray;
    margin-left: 14px;
    align-self: flex-start;
}
> .boxWrap {
    ${media.desktop} {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        width: 1000px;
    }
    width: 90%;
}
> .boxWrap > .img {
    width: 100%;
    height: 200px;
    background-color: gray;
    ${media.desktop} {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        width: 48%;
    }
}
> .boxWrap > .cont {
    width: 100%;
    height: 200px;
    background-color: gray;
    ${media.desktop} {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        width: 48%;
    }
}
`