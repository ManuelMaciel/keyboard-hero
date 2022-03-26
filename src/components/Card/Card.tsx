import { FC } from "react";
import styled from "styled-components";

const Card: FC = ({ children }) => (
  <CardWrapper>
    <CardContent>
      {children}
    </CardContent>
  </CardWrapper>
);

// Styled Components
const CardWrapper = styled.div`
  background-color: black;
  overflow: hidden;
  padding: 10px;
  margin: 48px;
  box-shadow: rgba(240, 46, 46, 0.4) 0px 5px, rgba(240, 46, 46, 0.3) 0px 10px, rgba(240, 46, 46, 0.2) 0px 15px, rgba(240, 46, 46, 0.1) 0px 20px, rgba(240, 46, 46, 0.05) 0px 25px;
  border-radius: 15px;
`
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
`

export default Card;
