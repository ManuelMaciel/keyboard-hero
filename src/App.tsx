import styled from 'styled-components';
import { useScreenSize } from './hooks/useScreenSize';
import KeyboardHero from './pages/KeyboardHero';
import Registration from './pages/Registration';

function App() {
  const screenSize = useScreenSize();
  console.log('screenSize', screenSize);
  return (
    <>
      <AppWrapper>
        <Registration />
      </AppWrapper>
    </>
  )
}

// Styled Components
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fafafa;
`;

export default App
