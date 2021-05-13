import styled from 'styled-components'
import Header from './components/Header';
import Content from './components/Content';
import Hero from './components/Hero';
import Logo from './images/c.png'
function App() {
  return (
    <>
      <AppWrap>
        <Header Logo={Logo}/>
        <Hero />
        <Content/>
      </AppWrap>
    </>
  );
}

export default App;

const AppWrap = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
width: 100%; 
border: 1px solid red;
`