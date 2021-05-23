import styled, { css } from 'styled-components'

const Button = styled.button`
  background-color: black;
  color: white;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-color: blue;
    `}

  ${({ variant }) =>
    variant === 'danger' &&
    css`
      background-color: red;
    `}
`

export default Button
