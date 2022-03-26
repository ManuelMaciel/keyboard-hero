import styled from "styled-components";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <TitleHeader>
      {title}
    </TitleHeader>
  )
}

// Styled Components
const TitleHeader = styled.h1`
  color: #F49F0A;
  text-shadow: #F08700 0px 0px 10px;
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  margin: 0;
  padding: 0;
`

export default Title;
