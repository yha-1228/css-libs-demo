import styled, { css } from 'styled-components'

const Button = styled.button`
  background-color: black;
  color: white;

  ${({ variant }) =>
    variant &&
    css`
      background-color: ${variant};
    `}
`

export default Button
