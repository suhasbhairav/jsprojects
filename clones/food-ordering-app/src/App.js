import styled from 'styled-components';
import Checkout from './components/Checkout';
import Main from './components/Main';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Wrapper>
      <Sidebar />
      <HomeContainer>
        <Main />
        <Checkout />
      </HomeContainer>

    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: #f1f1f3;
  height: 100vh;
  width: 100vw;
  display: flex;
`

const HomeContainer = styled.div`
  display: flex;
`
