import styled, { css } from 'styled-components'
import colors from './colors'

const Button = styled.button`
  border-radius: 8px;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);
  background-color: ${colors.opacityWhiteLight};
  padding: 15px 45px;
  color: ${colors.white};
  font-size: 28px;
  border: none;
  width: 100%;
  margin: 10px;
  cursor: pointer;
  width: 93%;
  min-width: 700px;

  &:focus, &:hover {
    color: ${colors.black};
    background-color: ${colors.opacityWhiteDarker};
    width: 100%;
  }
`

const PlayerButton = styled.button`
  width: 100px;
  height: 70px;
  border-radius: 8px;
  background-blend-mode: overlay;
  /* background-image: linear-gradient(to bottom, ${colors.lightGrey}, ${colors.lightGrey}); */
  background: ${colors.lightGrey};
  font-size: 24px;
  margin: 0 30px;

  &.active, &:focus {
    background: ${colors.white};
  }
`

Button.PlayerButton = PlayerButton

export default Button