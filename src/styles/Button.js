import styled from 'styled-components'
import colors from './colors'

const Button = styled.button`

`

const PlayerButton = styled.button`
  width: 150px;
  height: 110px;
  border-radius: 8px;
  background-blend-mode: overlay;
  /* background-image: linear-gradient(to bottom, ${colors.lightGrey}, ${colors.lightGrey}); */
  background: ${colors.lightGrey};
  font-size: 36px;
  margin: 0 30px;

  &.active, &:focus {
    background: ${colors.white};
  }
`

Button.PlayerButton = PlayerButton

export default Button