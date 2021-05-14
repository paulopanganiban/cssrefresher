import styled from 'styled-components'
import Header from './components/Header';
import Content from './components/Content';
import Hero from './components/Hero';
import Logo from './images/c.png'
import Skills from './components/Skills';
import About from './components/About';
import Blog from './components/Blog';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
      <AppWrap>
        <Sidebar/>
        <Header Logo={Logo}/>
        <Hero />
        <Content/>
        <Skills/>
        <About/>
        <Blog/>
      </AppWrap>
    </>
  );
}

export default App;

const AppWrap = styled.div`
`