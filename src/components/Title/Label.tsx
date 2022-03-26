import styled from "styled-components"

const Label = ({ title }: any) => {
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
