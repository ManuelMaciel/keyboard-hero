// import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import KeyboardHero from "./KeyboardHero";

const Keyboardgame = () => {
  return (
    <>
      <TitleGame>
        Eyes on the screen
      </TitleGame>
      {/* <TitleGame>
        Points: {pointsInGame}
      </TitleGame> */}
      <KeyboardHero
        addPoints={() => {}}
        decreasePoints={() => {}}
      />
      <TitleGame>
        Press the keys
      </TitleGame>
    </>
  )
};

// Styled Components
const TitleGame = styled.h1`
  color: mintcream;
  text-transform: uppercase;
  margin-top: 3em;
  margin-bottom: 3em;
  font-size: 1em;
  letter-spacing: 0.3em;
`

export default Keyboardgame;
