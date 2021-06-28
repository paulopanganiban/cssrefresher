import styled from 'styled-components'
import Header from './components/Header';
import Content from './components/Content';
import Hero from './components/Hero';
import Logo from './images/c.png'
import Skills from './components/Skills';
import About from './components/About';
import Blog from './components/Blog';
import Hamburger from './components/Hamburger';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
function App() {
    // toggle hamburger menu
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      console.log(isOpen)
      setIsOpen(!isOpen)
    }
  return (
    <>
      <Router>
        <AppWrap>
          <Hamburger isOpen={isOpen} toggle={toggle}/>
          <Header toggle={toggle} Logo={Logo} />
          <Hero toggle={toggle}/>
          <Content />
          {/* <Skills />
          <About />
          <Blog /> */}
        </AppWrap>
      </Router>
    </>
  );
}

export default App;

const AppWrap = styled.div`
`