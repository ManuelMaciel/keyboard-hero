import styled from "styled-components"

const Label = ({ title }: string) => {
  return (
    <LabelWrapper>
      {title}
    </LabelWrapper>
  )
}

// Styled Components
const LabelWrapper = styled.label`
  position: relative;
`

export default Label
