import styled from 'styled-components'
import colors from './colors'
import { space, width, height } from 'styled-system'

const Input = styled.input`
  height: 60px;
  min-width: 500px;
  border-radius: 10px;
  background-color: ${colors.opacityWhiteLight};
  padding: 0 30px;
  font-size: 24px;
  color: ${colors.opacityFontColor};
  border: none;
  ${space};

  &:focus {
    background-color: ${colors.opacityWhiteDarker};
    border: 1px solid ${colors.white};
    color: ${colors.white}
  }

  &::placeholder {
    color: ${colors.opacityFontColor};
  }
`

const Button = styled.button`
  height: 60px;
  border-radius: 10px;
  background-color: ${colors.opacityWhiteDarker};
  padding: 0 30px;
  font-size: 24px;
  color: ${colors.white};
  border: none;
  font-weight: bold;
  user-select: none;
  ${space};
  ${width};
  ${height};

  &:focus, &:hover {
    background-color: ${colors.blue};
  }
`

Input.Button = Button

export default Input