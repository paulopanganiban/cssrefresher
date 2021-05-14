import React from 'react'
import styled from 'styled-components'
import { media } from '../data'
import MenuIcon from '@material-ui/icons/Menu';
import Logoz from '../images/c.png'
import Hamburger from './Hamburger';
const Header = ({toggle}) => {
    return (
        <>
        <Hamburger toggle={toggle}></Hamburger>
            <HeaderContainer>
                <Logo src={Logoz} />
                <HeaderLeft>
                    <h3>John Paulo Panganiban</h3>
                    <h5>Front-end Developer</h5>
                </HeaderLeft>
                <HeaderRight>
                    <h5 onClick={toggle}>MENU</h5>
                    <MenuIcon onClick={toggle}></MenuIcon>
                </HeaderRight>
            </HeaderContainer>
        </>
    )
}
export default Header
const Logo = styled.img`
height: 50px;
margin-left: 12px;
padding: 12px;
cursor: pointer;
:hover {
    opacity: 0.8;
}
${media.phone} {
    display: none;
}
@media all and (max-width: 480px) { 
   
}
`
const HeaderRight = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
> .MuiSvgIcon-root {
    font-size: 30px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 2px;
}
 > h5, .MenuIcon {
     cursor: pointer;
 }
`
const HeaderLeft = styled.div`
margin-left: 20px;
margin-right: auto;
flex-direction: column;
justify-content: center;
`
const HeaderContainer = styled.div`
height: 125px;
min-width: 350px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
    > .title__header {
        margin: 1em 0 .5em;
    }
`
