import styled from 'styled-components'
import colors from './colors'

import Text from './Text'

const Join = styled.div`

`

const Image = styled.img`
  width: 120px;
  height: 120px;
  background: ${colors.opacityWhiteDarker}
`

const Package = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: ${colors.opacityWhiteLight};
  margin: 0 40px;
  width: 350px;
  height: 480px;
  cursor: pointer;

  &.active, &:hover {
    background: ${colors.opacityWhiteDarker};
    width: 370px;
    height: 500px;

    ${Text} {
      color: ${colors.black}
    }
  }
`

Join.Package = Package
Join.Image = Image

export default Join