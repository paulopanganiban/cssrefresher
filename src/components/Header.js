import React from 'react'
import styled from 'styled-components'
import { media } from '../data'
import MenuIcon from '@material-ui/icons/Menu';
import Logoz from '../images/c.png'
const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Logo src={Logoz} />
                <HeaderLeft>
                    <h5>John Paulo Panganiban</h5>
                    <h5>Front-end Developer</h5>
                </HeaderLeft>
                <HeaderRight>
                    <h5>MENU</h5>
                    <MenuIcon></MenuIcon>
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
    cursor: pointer;
    margin-left: 10px;
    margin-right: 20px;
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
/* responsive images */
/* img {
	max-width: 100%;
	height: auto;
} */
/**
 * By using display: flex
 * Logo and nav are in 2 cols
 * align-items make them
 * vertically centered
 * justify-content distribute
 * horizontal spaces around
 * and flex-wrap break the
 * things in two lines in
 * small screens
 */
    display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
    > .title__header {
        margin: 1em 0 .5em;
    }
`
