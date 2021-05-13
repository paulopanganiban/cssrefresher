import React from 'react'
import styled from 'styled-components'
import {media} from '../data'
const Header = ({ Logo }) => {
    return (
        <HeaderWrap>
            <img src={Logo} alt="Logo" />
        </HeaderWrap>
    )
}
export default Header
const HeaderWrap = styled.div`
width: 100%;
border: 1px solid blue;
padding: 14px;
background-color: white;
> img {
    max-width: 125px;
    width: 100%;
    height: auto;
    margin-left: 16px;
    color: #fff;
}

${media.desktop} {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 48%;
}
`