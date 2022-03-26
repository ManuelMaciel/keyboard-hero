import styled from 'styled-components';
import { useScreenSize } from './hooks/useScreenSize';
import KeyboardGame from './pages/KeyboardGame';
import Registration from './pages/Registration';

function App() {
  const screenSize = useScreenSize();

  const size = {
    height: screenSize.innerHeight,
    width: screenSize.innerWidth,
  }

  return (
    <>
      <AppWrapper style={{ width: size.width, height: size.height }} >
        {/* <Registration /> */}
        <KeyboardGame />
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
  ${(props: any) => props.style}
  background-color: black;
`;

export default App
