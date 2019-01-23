import styled from 'styled-components'
import colors from './colors'
import { space, width, height } from 'styled-system'

const Input = styled.input`
  height: 60px;
  min-width: 500px;
  border-radius: 5px;
  background-color: ${colors.opacityWhiteLight};
  padding: 0 30px;
  font-size: 24px;
  color: ${colors.opacityFontColor};
  border: none;
  text-align: center;
  ${space};
  width: calc(100% - 20px);

  &:focus {
    background-color: ${colors.almostWhite};
    color: ${colors.black};
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);
    width: 100%;

    &::placeholder {
    color: ${colors.black};
  }
  }

  &::placeholder {
    color: ${colors.opacityFontColor};
  }
`

const Button = styled.button`
  min-width: 280px;
  height: 60px;
  border-radius: 5px;
  background-color: ${colors.opacityWhiteLight};
  padding: 0 30px;
  font-size: 24px;
  color: ${colors.white};
  border: none;
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