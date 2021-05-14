import React from 'react'
import styled from 'styled-components'
import { menuItems } from '../data'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { media } from '../data'
const Hamburger = ({ isOpen, toggle }) => {
    return (
        <HamburgerContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <HamburgerWrapper>
                <SidebarMenu>
                    <SidebarLink
                        duration={500}
                        smooth={true}
                        to="Home"
                        onClick={toggle}
                    >
                        <span>{menuItems[0]}</span>
                    </SidebarLink>
                    <SidebarLink
                        duration={500}
                        smooth={true}
                        to="Projects" onClick={toggle}>
                        <span>{menuItems[1]}</span>
                    </SidebarLink>
                    <SidebarLink
                        duration={500}
                        smooth={true}
                        to="Skills" onClick={toggle}>
                        <span>{menuItems[2]}</span>
                    </SidebarLink>
                    <SidebarLink
                        duration={500}
                        smooth={true}
                        to="About" onClick={toggle}>
                        <span>{menuItems[3]}</span>
                    </SidebarLink>
                    <SidebarLink
                        duration={500}
                        smooth={true}
                        to="Blog" onClick={toggle}>
                        <span>{menuItems[4]}</span>
                    </SidebarLink>
                    <SidebarLink

                        duration={500}
                        smooth={true}
                        to={menuItems[5]} onClick={toggle}>
                        <span>{menuItems[5]}</span>
                    </SidebarLink>
                </SidebarMenu>
            </HamburgerWrapper>
        </HamburgerContainer>
    )
}

export default Hamburger
const SidebarMenu = styled.ul`
/* display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${media.phone} {
    grid-template-rows: repeat(6, 60px);
}
`
const HamRoute = styled(LinkS)`
border-radius: 5px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
transition: all 0.2s ease-in-out;
text-decoration: none;
> span > :hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    cursor: pointer;
}
`
const HamBtnWrap = styled.div`
display: flex;
justify-content: center;
`
const HamburgerWrapper = styled.div`
color: #fff;
`
const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem; 
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
:hover {
    color: #000;
    transition: 0.2s ease-in-out;
    cursor: pointer;
}
`
const HamburgerContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? 100 : 0)};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`


const CloseIcon = styled.div`
color: #292929;
`
const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
`