import { useState, useEffect } from 'react';
import styled from "styled-components";
import { getRandomNumber } from '../utils';

const KeyboardHero = () => {
  const [keys] = useState([
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  ])

  const timestamps: number[] = [];

  const getTimestamp = () => {
    return Math.floor(Date.now() / 1000)
  }

  timestamps.unshift(getTimestamp());

  const getRandomKey = () => {
    console.log('key pressed', keys[getRandomNumber(0, keys.length-1)]);
    return keys[getRandomNumber(0, keys.length-1)]
  }

  const targetRandomKey = () => {
    const key = document.getElementById(getRandomKey());
    key?.classList.add('selected');
    let start = Date.now()
    console.log('start', start)
  }

  document.addEventListener("keyup", event => {
    const keyPressed = String.fromCharCode(event.keyCode);
    const keyElement = document.getElementById(keyPressed);
    const highlightedKey = document.querySelector(".selected");

    keyElement?.classList.add("hit")
    keyElement?.addEventListener('animationend', () => {
      keyElement?.classList.remove("hit")
    })

    if (keyPressed === highlightedKey?.innerHTML) {
      timestamps.unshift(getTimestamp());
      const elapsedTime = timestamps[0] - timestamps[1];
      console.log(`Character per minute ${60/elapsedTime}`)
      highlightedKey.classList.remove("selected");
      targetRandomKey();
    }
  })
  useEffect(() => {
    targetRandomKey();
  }, [])


  return (
    <Keyboard>
      <Row>
        <Pinky id="esc">ESC</Pinky>
        <Pinky id="1">1</Pinky>
        <Ring id="2">2</Ring>
        <Middle id="3">3</Middle>
        <Pointer1 id="4">4</Pointer1>
        <Pointer2 id="5">5</Pointer2>
        <Pointer2 id="6">6</Pointer2>
        <Pointer1 id="7">7</Pointer1>
        <Middle id="8">8</Middle>
        <Ring id="9">9</Ring>
        <Pinky id="10">0</Pinky>
        <Pinky >-</Pinky>
        <Pinky >+</Pinky>
        <Pinky style={{ width: '5em' }} id="back">BACK</Pinky>
      </Row>
      <Row>
        <Pinky style={{  width: '5em' }} id="tab">TAB</Pinky>
        <Pinky id="Q">Q</Pinky>
        <Ring id="W">W</Ring>
        <Middle id="E">E</Middle>
        <Pointer1 id="R">R</Pointer1>
        <Pointer2 id="T">T</Pointer2>
        <Pointer2 id="Y">Y</Pointer2>
        <Pointer1 id="U">U</Pointer1>
        <Middle id="I">I</Middle>
        <Ring id="O">O</Ring>
        <Pinky id="P">P</Pinky>
        <Pinky >[</Pinky>
        <Pinky >]</Pinky>
        <Pinky >\</Pinky>
      </Row>
      <Row>
        <Pinky style={{ width: '6em' }} id="caps">CAPS</Pinky>
        <Pinky id="A">A</Pinky>
        <Ring id="S">S</Ring>
        <Middle id="D">D</Middle>
        <Pointer1 id="F">F</Pointer1>
        <Pointer2 id="G">G</Pointer2>
        <Pointer2 id="H">H</Pointer2>
        <Pointer1 id="J">J</Pointer1>
        <Middle id="K">K</Middle>
        <Ring id="L">L</Ring>
        <Pinky >:</Pinky>
        <Pinky >''</Pinky>
        <Pinky style={{ width: '6em' }} id="enter">ENTER</Pinky>
      </Row>
      <Row>
        <Pinky style={{ width: '8em' }} id="left-shift">SHIFT</Pinky>
        <Pinky id="Z">Z</Pinky>
        <Ring id="X">X</Ring>
        <Middle id="C">C</Middle>
        <Pointer1 id="V">V</Pointer1>
        <Pointer2 id="B">B</Pointer2>
        <Pointer2 id="N">N</Pointer2>
        <Pointer1 id="M">M</Pointer1>
        <Middle >,</Middle>
        <Ring >.</Ring>
        <Pinky >;</Pinky>
        <Pinky style={{ width: '8em' }} id="right-shift">SHIFT</Pinky>
      </Row>
    </Keyboard>
  )
};

const Keyboard = styled.div`
  display: flex;
  flex-direction: column;
`
const LiStyled = styled.li`
  height: 3em;
  width: 3em;
  color: rgba(0,0,0,0.7);
  border-radius: 0.4em;
  line-height: 3em;
  letter-spacing: 1px;
  margin: 0.4em;
  transition: 0.3s;
  text-align: center;
  font-size: 1em;
`

const Row = styled.ul`
  margin: 0px;
  list-style: none;
  display: flex;
  ${(props: any) => props.style}
`
const Pinky = styled(LiStyled)`
  background-color: crimson;
  border: 2px solid crimson;
  ::selection {
    color: crimson;
  }
`
const Ring = styled(LiStyled)`
  background-color: coral;
  border: 2px solid coral;
  ::selection {
    color: coral;
  }
`
const Middle = styled(LiStyled)`
  background-color: darkorange;
  border: 2px solid darkorange;
  ::selection {
    color: darkorange;
  }
`
const Pointer1 = styled(LiStyled)`
  background-color: gold;
  border: 2px solid gold;
  ::selection {
    color: gold;
  }
`
const Pointer2 = styled(LiStyled)`
  background-color: khaki;
  border: 2px solid khaki;
  ::selection {
    color: khaki;
  }
`

export default KeyboardHero;
